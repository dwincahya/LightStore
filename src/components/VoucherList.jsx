import React from 'react';

const VoucherList = () => {
  const vouchers = [
    { id: 1, name: 'Voucher Google Play', discount: '10%', description: 'Discount for top-up using Google Play' },
    { id: 2, name: 'Voucher Steam', discount: '15%', description: 'Discount for Steam wallet' },
    { id: 3, name: 'Voucher Netflix', discount: '5%', description: 'Voucher for Netflix subscription' },
  ];

  return (
    <div className="container mx-auto px-6 md:px-10 py-6 md:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {vouchers.map(voucher => (
          <div key={voucher.id} className="border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{voucher.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{voucher.description}</p>
            <p className="text-md font-semibold text-blue-700 dark:text-blue-400 mt-2">{voucher.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherList;
