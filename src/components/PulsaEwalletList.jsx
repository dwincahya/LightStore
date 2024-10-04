import React from 'react';

const PulsaEwalletList = () => {
  const pulsaOptions = [
    { id: 1, name: 'Pulsa 10K', provider: 'Telkomsel', description: 'Pulsa 10 ribu untuk semua operator' },
    { id: 2, name: 'Pulsa 20K', provider: 'XL', description: 'Pulsa 20 ribu untuk semua operator' },
    { id: 3, name: 'E-Wallet OVO', provider: 'OVO', description: 'Top-up saldo OVO' },
    { id: 4, name: 'E-Wallet GoPay', provider: 'GoPay', description: 'Top-up saldo GoPay' },
  ];

  return (
    <div className="container mx-auto px-6 md:px-10 py-6 md:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {pulsaOptions.map(option => (
          <div key={option.id} className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{option.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{option.description}</p>
            <p className="text-md font-semibold text-blue-700 dark:text-blue-400 mt-2">Provider: {option.provider}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PulsaEwalletList;
