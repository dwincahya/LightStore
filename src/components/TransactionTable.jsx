import React from 'react';

const TransactionTable = ({ transactions }) => {
  const formatInvoiceNumber = (invoiceNumber) => {
    if (invoiceNumber.length <= 6) return invoiceNumber;
    return `${invoiceNumber.slice(0, 3)}*******${invoiceNumber.slice(-3)}`;
  };

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length <= 4) return phoneNumber;
    return `${phoneNumber.slice(0, 4)}*****`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 text-white text-xs sm:text-sm md:text-base">
        <thead>
          <tr>
            <th className="py-2 px-1 sm:px-2">Tanggal</th>
            <th className="py-2 px-1 sm:px-2">Nomor Invoice</th>
            <th className="py-2 px-1 sm:px-2">No Handphone</th>
            <th className="py-2 px-1 sm:px-2">Harga</th>
            <th className="py-2 px-1 sm:px-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-1 sm:px-2">{transaction.date}</td>
              <td className="py-2 px-1 sm:px-2">{formatInvoiceNumber(transaction.invoiceNumber)}</td>
              <td className="py-2 px-1 sm:px-2">{formatPhoneNumber(transaction.phoneNumber)}</td>
              <td className="py-2 px-1 sm:px-2">Rp {transaction.price.toLocaleString('id-ID')}</td>
              <td className={`py-2 px-1 sm:px-2 ${transaction.status === 'complete' ? 'text-lime-500' : 'text-yellow-500'}`}>
                {transaction.status}
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="5" className="text-center py-4">Tidak ada transaksi yang ditemukan</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
