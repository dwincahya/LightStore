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
  const [error, setError] = useState({ accountId: '', whatsappNumber: '', selectedItem: '' });
  const [notification, setNotification] = useState({ visible: false, message: '', invoiceId: '' });
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const foundGame = games.find((g) => g.id === parseInt(id));
    if (foundGame) {
      setGame(foundGame);
    }
    window.scrollTo(0, 0);

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

      setCurrentDate(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [id]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setError((prev) => ({ ...prev, selectedItem: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({ accountId: '', whatsappNumber: '', selectedItem: '' });

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

    const invoiceNumber = `${game.id}${currentDate.replace(/[-: ]/g, '')}`;
    const totalPrice = game.items.find(item => item.value === selectedItem).price;

    const newTransaction = {
      id: (Date.now()).toString(),
      date: currentDate,
      invoiceNumber,
      phoneNumber: whatsappNumber,
      price: totalPrice,
      status: 'pending',
    };

    addTransaction(newTransaction);

    setNotification({ visible: true, message: 'Invoice berhasil dibuat!', invoiceId: invoiceNumber });

    setTimeout(() => {
      setNotification({ visible: false, message: '', invoiceId: '' });
      navigate('/cek-transaksi');
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
    return <div className="flex justify-center items-center min-h-screen text-white">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center p-8">
      {notification.visible && (
        <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-md flex items-center space-x-2">
          <CheckCircleIcon className="h-6 w-6" />
          <span className="font-semibold">{notification.message}</span>
          <button onClick={handleCopyInvoiceId} className="ml-2 hover:text-gray-200">
            <ClipboardIcon className="h-5 w-5" />
          </button>
        </div>
      )}

      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
          <img src={game.image} alt={game.name} className="rounded-lg w-full mb-4" />
          <h1 className="text-2xl font-bold text-white">{game.name}</h1>
          <h2 className="text-sm text-gray-400">{game.publisher}</h2>
          <p className="mt-4 text-gray-300">{game.description}</p>
          <div className="flex mt-2">
            <span className="mr-2 text-gray-400">Rating:</span>
            <span className="text-yellow-400">
              {'★'.repeat(Math.floor(game.rating))}{"☆".repeat(5 - Math.floor(game.rating))}
            </span>
          </div>
        </div>

        <div className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-4">Detail Transaksi</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="accountId" className="block text-sm font-medium text-gray-300">ID Game:</label>
              <input
                type="text"
                id="accountId"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="Masukkan ID akun game Anda"
              />
              {error.accountId && <p className="text-red-500 text-sm mt-1">{error.accountId}</p>}
            </div>

            <h4 className="text-lg font-semibold text-gray-300">Pilih Item:</h4>
            <div className="flex flex-wrap gap-4 px-5 md:px-8">
              {game.items.map((item) => (
                <div
                  key={item.value}
                  onClick={() => handleItemClick(item.value)}
                  className={` cursor-pointer text-white border-2 text-sm rounded-lg p-4 transition-transform transform hover:scale-105 max-w-32 w-40 md:max-w-40 break-words ${selectedItem === item.value ? 'border-blue-700 bg-gray-900' : 'border-gray-600'}`}
                >
                  {item.label} - Rp {item.price.toLocaleString()}
                </div>
              ))}
            </div>
            {error.selectedItem && <p className="text-red-500 text-sm">{error.selectedItem}</p>}

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300">Nomor WhatsApp:</label>
              <input
                type="text"
                id="whatsapp"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="Masukkan nomor WhatsApp"
              />
              {error.whatsappNumber && <p className="text-red-500 text-sm mt-1">{error.whatsappNumber}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-500"
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
