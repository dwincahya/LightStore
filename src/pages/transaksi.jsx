import React from 'react';
import InvoiceSearchApp from '../components/InvoiceSearchApp';

function CekTransaksi() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className='text-white font-bold text-3xl mb-4'>Cari Transaksi Kamu!</h2>
        <p className='text-white font-semibold mb-6'>Transaksi Real-Time pesanan masuk terbaru.</p>
        <InvoiceSearchApp />
      </div>
    </div>
  );
}

export default CekTransaksi;
