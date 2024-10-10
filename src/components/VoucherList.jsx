import React from 'react';
import vouchers from '../data/vouchersData';
import VoucherItem from './VoucherItem';

const VoucherList = ({ selectedFilter }) => {
  const filteredVouchers = selectedFilter && selectedFilter !== 'Semua Voucher'
    ? vouchers.filter(voucher => voucher.category === selectedFilter)
    : vouchers; 

  return (
    <div className="container mx-auto px-6 md:px-10 py-6 md:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
        {filteredVouchers.map((voucher, index) => (
          <VoucherItem key={index} voucher={voucher} />
        ))}
      </div>
    </div>
  );
};

export default VoucherList;
