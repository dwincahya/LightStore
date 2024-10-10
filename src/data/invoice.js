// src/data/invoice.js

// Kunci untuk penyimpanan transaksi
const TRANSACTIONS_KEY = 'transactions';

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
  // Simpan transaksi ke localStorage
  const transactions = getTransactions();
  transactions.push(transaction);
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
};

// Fungsi untuk mencari invoice berdasarkan nomor invoice
export const searchInvoiceByNumber = (invoiceNumber) => {
  return invoices.find(invoice => invoice.invoiceNumber === invoiceNumber);
};

// Fungsi untuk mendapatkan transaksi dari localStorage
const getTransactions = () => {
  const transactions = JSON.parse(localStorage.getItem(TRANSACTIONS_KEY)) || [];
  return transactions;
};

// Mengambil transaksi dari localStorage saat aplikasi dimuat
const transactions = getTransactions();
export default transactions;
