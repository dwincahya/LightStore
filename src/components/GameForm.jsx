// components/GameForm.js
import React, { useState, useEffect } from 'react';

const GameForm = ({ game }) => {
  const [formData, setFormData] = useState({
    gameId: '',
    server: '',
    item: '',
    paymentMethod: '',
    contact: '',
  });
  const [invoice, setInvoice] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (invoice && status === 'pending') {
      const timer = setTimeout(() => {
        setStatus('complete');
      }, 600000); // 10 menit dalam milidetik

      return () => clearTimeout(timer);
    }
  }, [invoice, status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const invoiceNumber = `INV${Date.now()}`;
    setInvoice({
      ...formData,
      invoiceNumber,
      price: 'Rp 100.000', // Contoh harga, bisa diubah sesuai logika bisnis
      createdAt: new Date(),
    });
    setStatus('pending');
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">{game.name}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">ID Game</label>
          <input
            type="text"
            name="gameId"
            value={formData.gameId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block">Server</label>
          <input
            type="text"
            name="server"
            value={formData.server}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block">Pilihan Item</label>
          <select
            name="item"
            value={formData.item}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="" disabled>Pilih Item</option>
            <option value="diamond">Diamond</option>
            <option value="weekly-pass">Weekly Pass</option>
          </select>
        </div>
        <div>
          <label className="block">Metode Pembayaran</label>
          <input
            type="text"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block">Email/Nomor WhatsApp</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded transition"
        >
          Kirim
        </button>
      </form>
      {invoice && (
        <div className="mt-4 p-4 bg-gray-700 rounded">
          <h4 className="font-bold">Invoice</h4>
          <p>Nomor: {invoice.invoiceNumber}</p>
          <p>Status: {status}</p>
        </div>
      )}
    </div>
  );
};

export default GameForm;
