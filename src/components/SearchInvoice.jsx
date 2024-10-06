import React from 'react';

const SearchInvoice = ({ invoiceNumber, setInvoiceNumber, handleSearch, loading, handleReset }) => {
  return (
    <div className="flex flex-col sm:flex-row mb-4">
      <input 
        type="text" 
        value={invoiceNumber} 
        onChange={(e) => setInvoiceNumber(e.target.value)} 
        placeholder="Nomor Invoice Kamu" 
        className="flex-grow p-2 mb-2 sm:mb-0 border border-gray-600 rounded-lg bg-gray-800 text-white text-xs sm:text-sm md:text-base"
      />
      <button 
        onClick={handleSearch} 
        disabled={loading} 
        className={`ml-0 sm:ml-2 px-4 py-2 rounded-lg ${loading ? 'bg-blue-600' : 'bg-blue-700 hover:bg-blue-600'} text-white text-xs sm:text-sm md:text-base`}
      >
        {loading ? 'Mencari...' : 'Cari Transaksi'}
      </button>
      <button 
        onClick={handleReset}
        className="ml-0 sm:ml-2 px-4 py-2 mt-2 sm:mt-0 rounded-lg bg-red-500 hover:bg-red-400 text-white text-xs sm:text-sm md:text-base"
      >
        Reset
      </button>
    </div>
  );
};

export default SearchInvoice;
