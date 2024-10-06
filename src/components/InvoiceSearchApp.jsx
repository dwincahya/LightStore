import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInvoice from './SearchInvoice';
import TransactionTable from './TransactionTable';

const InvoiceSearchApp = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions');
        const allTransactions = response.data;
        const pendingTransactions = allTransactions.filter(transaction => transaction.status === 'pending');
        setFilteredTransactions(pendingTransactions.slice(0, 10)); // Maksimal 10 item
        setTransactions(allTransactions);
      } catch (error) {
        console.error("Error fetching transactions", error);
      }
    };

    fetchTransactions();
  }, []);

  const handleSearch = async () => {
    if (!invoiceNumber) {
      setFilteredTransactions(transactions.filter(transaction => transaction.status === 'pending').slice(0, 10));
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/transactions/${invoiceNumber}`);
      setFilteredTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transaction", error);
      setFilteredTransactions([]);
    } finally {
      setLoading(false);
    }
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
