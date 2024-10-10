import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import games from '../data/gamesData'; // Data game yang diimpor
import { addTransaction } from '../data/invoice'; // Fungsi untuk menambah transaksi
import { ClipboardIcon, CheckCircleIcon } from '@heroicons/react/24/outline'; // Ikon untuk notifikasi

const GameDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate(); // Navigasi antar halaman
  const [game, setGame] = useState(null); // State untuk menyimpan detail game
  const [selectedItem, setSelectedItem] = useState(null); // State untuk item yang dipilih
  const [whatsappNumber, setWhatsappNumber] = useState(''); // State untuk nomor WhatsApp
  const [accountId, setAccountId] = useState(''); // State untuk ID akun
  const [error, setError] = useState({ accountId: '', whatsappNumber: '', selectedItem: '' }); // State untuk menyimpan pesan error
  const [notification, setNotification] = useState({ visible: false, message: '', invoiceId: '' }); // State untuk notifikasi
  const [currentDate, setCurrentDate] = useState(''); // State untuk menyimpan tanggal dan waktu saat ini

  useEffect(() => {
    const foundGame = games.find((g) => g.id === parseInt(id)); // Mencari game berdasarkan ID
    if (foundGame) {
      setGame(foundGame);
    }
    window.scrollTo(0, 0); // Menggulir ke atas saat komponen dimuat

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
        timeZone: 'Asia/Jakarta',
      }).replace(',', '').replace(/\//g, '-');

      setCurrentDate(formattedTime); // Mengatur tanggal dan waktu saat ini
    }, 1000);

    return () => clearInterval(interval); // Membersihkan interval saat komponen tidak digunakan
  }, [id]);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Mengatur item yang dipilih
    setError((prev) => ({ ...prev, selectedItem: '' })); // Menghapus error untuk pemilihan item
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah pengiriman default formulir
    setError({ accountId: '', whatsappNumber: '', selectedItem: '' }); // Menghapus error sebelumnya

    // Validasi input
    if (!accountId) {
      setError((prev) => ({ ...prev, accountId: 'ID Game wajib diisi!' }));
      return;
    }

    if (!selectedItem) {
      setError((prev) => ({ ...prev, selectedItem: 'Pilih salah satu item!' }));
      return;
    }

    if (!whatsappNumber) {
      setError((prev) => ({ ...prev, whatsappNumber: 'Nomor WhatsApp wajib diisi!' }));
      return;
    }

    const invoiceNumber = `${game.id}${currentDate.replace(/[-: ]/g, '')}`; // Membuat nomor invoice
    const totalPrice = game.items.find(item => item.value === selectedItem).price; // Menemukan harga item

    const newTransaction = {
      id: (Date.now()).toString(),
      date: currentDate,
      invoiceNumber,
      phoneNumber: whatsappNumber,
      price: totalPrice,
      status: 'pending',
    };

    addTransaction(newTransaction); // Menambahkan transaksi

    setNotification({ visible: true, message: 'Invoice berhasil dibuat!', invoiceId: invoiceNumber }); // Menampilkan notifikasi

    setTimeout(() => {
      setNotification({ visible: false, message: '', invoiceId: '' });
      navigate('/cek-transaksi'); // Navigasi ke halaman cek transaksi setelah 3 detik
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
    return <div className="text-white">Loading...</div>; // Menampilkan loading jika data game belum ada
  }

  return (
    <div className="bg-gray-800 text-white p-6">
      {notification.visible && (
        <div className="bg-green-600 text-white p-4 rounded-lg mb-4 text-center flex justify-between items-center shadow-lg transition-all duration-300">
          <div className="flex items-center">
            <CheckCircleIcon className="h-6 w-6 text-white mr-2" aria-hidden="true" />
            <span className="font-bold">{notification.message}</span>
          </div>
          <button onClick={handleCopyInvoiceId} className="text-white ml-4 flex items-center hover:text-gray-300">
            <ClipboardIcon className="h-5 w-5" aria-hidden="true" />
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

        <div className="md:w-1/2 mt-4 md:mt-0 bg-gray-900 p-4 rounded-lg">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-2">
              <label htmlFor="accountId" className="block mb-1 text-gray-300">ID Game:</label>
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

            <h3 className="text-xl font-semibold text-white mb-2">Pilih Item:</h3>
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
              <label htmlFor="whatsapp" className="block mb-1 text-gray-300">Nomor WhatsApp:</label>
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
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Buat Invoice
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
