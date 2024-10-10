<<<<<<< HEAD
// src/data/invoice.js

// Array transaksi yang menjadi data storage
const invoices = [
  {
    id: 1,
    date: '2024-10-01',
    invoiceNumber: 'INV123456',
    phoneNumber: '081234567890',
    price: 500000,
    status: 'pending'
  },
  {
    id: 2,
    date: '2024-10-02',
    invoiceNumber: 'INV654321',
    phoneNumber: '089876543210',
    price: 300000,
    status: 'complete'
  },
  {
    id: 3,
    date: '2024-10-03',
    invoiceNumber: 'INV112233',
    phoneNumber: '081122334455',
    price: 250000,
    status: 'pending'
  },
  // Tambahkan data lainnya sesuai kebutuhan
];

// Fungsi untuk mendapatkan semua transaksi dengan status "pending"
export const getPendingInvoices = () => {
  return invoices.filter(invoice => invoice.status === 'pending');
};

// Fungsi untuk menambah transaksi baru
export const addTransaction = (transaction) => {
  invoices.push(transaction);
};

// Fungsi untuk mencari invoice berdasarkan nomor invoice
export const searchInvoiceByNumber = (invoiceNumber) => {
  return invoices.find(invoice => invoice.invoiceNumber === invoiceNumber);
};
=======
const TRANSACTIONS_KEY = 'transactions';

const getTransactions = () => {
  const transactions = JSON.parse(localStorage.getItem(TRANSACTIONS_KEY)) || [];
  return transactions;
};

export const addTransaction = (transaction) => {
  const transactions = getTransactions();
  transactions.push(transaction);
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
};

const transactions = getTransactions();
export default transactions;
>>>>>>> dd2b7074b9f133d2d7c8d6d8c82434a0d5fd1e16
