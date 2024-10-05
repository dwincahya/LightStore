import React from 'react';

const SearchInvoice = ({ invoiceNumber, setInvoiceNumber, handleSearch, loading, handleReset }) => {
  return (
    <div className="flex mb-4">
      <input 
        type="text" 
        value={invoiceNumber} 
        onChange={(e) => setInvoiceNumber(e.target.value)} 
        placeholder="Nomor Invoice Kamu" 
        className="flex-grow p-2 border border-gray-600 rounded-lg bg-gray-800 text-white"
      />
      <button 
        onClick={handleSearch} 
        disabled={loading} 
        className={`ml-2 px-4 py-2 rounded-lg ${loading ? 'bg-blue-600' : 'bg-blue-700 hover:bg-blue-600'} text-white`}
      >
        {loading ? 'Mencari...' : 'Cari Transaksi'}
      </button>
      <button 
        onClick={handleReset}
        className="ml-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-400 text-white"
      >
        Reset
      </button>
    </div>
  );
};

export default SearchInvoice;
