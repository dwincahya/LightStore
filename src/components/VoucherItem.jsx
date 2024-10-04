import React from 'react';

const VoucherItem = ({ voucher }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="font-semibold text-lg">{voucher.name}</h3>
        <p className="text-gray-600">Category: {voucher.category}</p>
      </div>
    </div>
  );
};

export default VoucherItem;
