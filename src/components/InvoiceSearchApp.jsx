import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInvoice from './SearchInvoice';
import TransactionTable from './TransactionTable';

const InvoiceSearchApp = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  // Fetch all transactions on component mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions');
        const allTransactions = response.data;

        // Filter pending transactions to show at first
        const pendingTransactions = allTransactions.filter(transaction => transaction.status === 'pending');
        setFilteredTransactions(pendingTransactions.slice(0, 10)); // Ambil maksimal 10 item
        setTransactions(allTransactions); // Simpan semua transaksi untuk pencarian
      } catch (error) {
        console.error("Error fetching transactions", error);
      }
    };

    fetchTransactions();
  }, []);

  // Handle search logic
  const handleSearch = async () => {
    if (!invoiceNumber) {
      // Jika tidak ada nomor invoice yang dimasukkan, jangan panggil API
      setFilteredTransactions(transactions.filter(transaction => transaction.status === 'pending').slice(0, 10)); // Tampilkan 10 transaksi pending
      return; // Keluar dari fungsi jika tidak ada input
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

  // Handle reset
  const handleReset = () => {
    setInvoiceNumber('');
    setFilteredTransactions(transactions.filter(transaction => transaction.status === 'pending').slice(0, 10));
  };

  return (
    <div>
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
