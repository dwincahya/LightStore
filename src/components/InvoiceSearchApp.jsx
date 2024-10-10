<<<<<<< HEAD
// src/components/InvoiceSearchApp.js
import React, { useState, useEffect } from 'react';
import { getPendingInvoices, searchInvoiceByNumber } from '../data/invoice'; 
=======
import React, { useState, useEffect } from 'react';
import { getPendingInvoices, searchInvoiceByNumber } from '../api/transaction'; 
>>>>>>> dd2b7074b9f133d2d7c8d6d8c82434a0d5fd1e16
import SearchInvoice from './SearchInvoice';
import TransactionTable from './TransactionTable';

const InvoiceSearchApp = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const pendingInvoices = getPendingInvoices();
    setFilteredTransactions(pendingInvoices.slice(0, 10));
    setTransactions(pendingInvoices);
  }, []);

  const handleSearch = () => {
    setLoading(true);
    if (!invoiceNumber) {
      setFilteredTransactions(transactions.filter(transaction => transaction.status === 'pending').slice(0, 10));
      setLoading(false);
      return;
    }

    const result = searchInvoiceByNumber(invoiceNumber);
    setFilteredTransactions(result ? [result] : []);
    setLoading(false);
  };

  const handleReset = () => {
    setInvoiceNumber('');
    setFilteredTransactions(transactions.filter(transaction => transaction.status === 'pending').slice(0, 10));
  };

  return (
    <div className="text-xs sm:text-sm md:text-base">
      <SearchInvoice
        invoiceNumber={invoiceNumber}
        setInvoiceNumber={setInvoiceNumber}
        handleSearch={handleSearch}
        loading={loading}
        handleReset={handleReset}
      />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default InvoiceSearchApp;
