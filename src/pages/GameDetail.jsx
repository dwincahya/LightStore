import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import games from '../data/gamesData';
import { addTransaction } from '../data/invoice';
import { ClipboardIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [accountId, setAccountId] = useState('');
  const [error, setError] = useState({
    accountId: '',
    whatsappNumber: '',
    selectedItem: '',
  });
  const [notification, setNotification] = useState({ visible: false, message: '', invoiceId: '' });
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const foundGame = games.find((g) => g.id === parseInt(id));
    if (foundGame) {
      setGame(foundGame);
    }
    window.scrollTo(0, 0); // Scroll ke atas saat komponen dimuat

    // Mengupdate waktu setiap detik
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleString('id-ID', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta', // Ubah zona waktu sesuai kebutuhan
      }).replace(',', '').replace(/\//g, '-'); // Mengganti / dengan -

      setCurrentDate(formattedTime);
    }, 1000);

    return () => clearInterval(interval); // Bersihkan interval saat komponen tidak lagi digunakan
  }, [id]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setError((prev) => ({ ...prev, selectedItem: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setError({
      accountId: '',
      whatsappNumber: '',
      selectedItem: '',
    });

    // Validasi ID Game
    if (!accountId) {
      setError((prev) => ({ ...prev, accountId: 'ID Game wajib diisi!' }));
      return;
    }

    // Validasi pilihan item
    if (!selectedItem) {
      setError((prev) => ({ ...prev, selectedItem: 'Pilih salah satu item!' }));
      return;
    }

    // Validasi Nomor WhatsApp
    if (!whatsappNumber) {
      setError((prev) => ({ ...prev, whatsappNumber: 'Nomor WhatsApp wajib diisi!' }));
      return;
    }

    // Menghasilkan nomor invoice dengan waktu lokal
    const invoiceNumber = `${game.id}${currentDate.replace(/[-: ]/g, '')}`; // Menghapus pemisah

    // Menghitung total harga dari item yang dipilih
    const totalPrice = game.items.find(item => item.value === selectedItem).price;

    // Membuat data transaksi baru
    const newTransaction = {
      id: (Date.now()).toString(),
      date: currentDate,
      invoiceNumber,
      phoneNumber: whatsappNumber,
      price: totalPrice,
      status: 'pending',
    };

    // Menambahkan transaksi ke Local Storage
    addTransaction(newTransaction);

    // Menampilkan notifikasi
    setNotification({ visible: true, message: 'Invoice berhasil dibuat!', invoiceId: invoiceNumber });

    // Mengalihkan pengguna ke halaman cek transaksi
    setTimeout(() => {
      setNotification({ visible: false, message: '', invoiceId: '' });
      navigate('/cek-transaksi'); // Ganti '/cek-transaksi' dengan path yang sesuai
    }, 3000);
  };

  const handleCopyInvoiceId = () => {
    navigator.clipboard.writeText(notification.invoiceId)
      .then(() => {
        setNotification({ visible: true, message: 'Invoice berhasil disalin!', invoiceId: notification.invoiceId });
        setTimeout(() => {
          setNotification({ visible: false, message: '', invoiceId: '' });
        }, 3000);
      })
      .catch(err => {
        console.error('Gagal menyalin ID Invoice:', err);
      });
  };

  if (!game) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-gray-800 text-white p-6">
      {/* Notifikasi */}
      {notification.visible && (
        <div className="bg-green-600 text-white p-4 rounded-lg mb-4 text-center flex justify-between items-center shadow-lg transition-all duration-300">
          <div className="flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-white mr-2" aria-hidden="true" />
            <span className="font-bold">{notification.message}</span>
          </div>
          <button onClick={handleCopyInvoiceId} className="text-white ml-4 flex items-center hover:text-gray-300">
            <ClipboardIcon className="h-5 w-5" aria-hidden="true" /> {/* Ikon salin */}
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
        <div className="md:w-1/2 flex flex-col items-center mb-4 md:mb-0">
          <img src={game.image} alt={game.name} className="w-3/4 mb-4 rounded-lg" />
          <h1 className="text-3xl font-bold">{game.name}</h1>
          <h2 className="text-lg">{game.publisher}</h2>
          <p className="mt-2 text-center">{game.description}</p>
          <div className="flex mt-2">
            <span className="mr-2">Rating:</span>
            <span className="text-yellow-400">
              {'★'.repeat(Math.floor(game.rating))}{"☆".repeat(5 - Math.floor(game.rating))}
            </span>
          </div>
        </div>

        <div className="md:w-1/2 mt-4 md:mt-0">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-2">
              <label htmlFor="accountId" className="block mb-1">ID Game:</label>
              <input
                type="text"
                id="accountId"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                className={`bg-gray-700 text-white p-2 rounded w-full ${error.accountId ? 'border-red-500' : ''}`}
                placeholder="Masukkan ID akun game Anda"
              />
              {error.accountId && (
                <p className="text-red-500 mt-1 text-sm">{error.accountId}</p>
              )}
            </div>

            <h3 className="text-xl font-semibold">Pilih Item:</h3>
            <div className="flex flex-wrap mb-4">
              {game.items.map((item) => (
                <div
                  key={item.value}
                  onClick={() => handleItemClick(item.value)}
                  className={`cursor-pointer border-2 rounded-lg p-2 m-2 transition-transform transform hover:scale-105 ${selectedItem === item.value ? 'border-blue-500' : 'border-gray-500'}`}
                >
                  {item.label} - Rp {item.price.toLocaleString()}
                </div>
              ))}
            </div>
            {error.selectedItem && (
              <p className="text-red-500 mb-2 text-sm">{error.selectedItem}</p>
            )}

            <div className="mb-2">
              <label htmlFor="whatsapp" className="block mb-1">Nomor WhatsApp:</label>
              <input
                type="text"
                id="whatsapp"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className={`bg-gray-700 text-white p-2 rounded w-full ${error.whatsappNumber ? 'border-red-500' : ''}`}
                placeholder="Masukkan nomor WhatsApp"
              />
              {error.whatsappNumber && (
                <p className="text-red-500 mt-1 text-sm">{error.whatsappNumber}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
