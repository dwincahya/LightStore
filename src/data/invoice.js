const TRANSACTIONS_KEY = 'transactions';

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
];

export const getPendingInvoices = () => {
  const transactions = getTransactions();
  return transactions.filter(invoice => invoice.status === 'pending');
};

export const addTransaction = (transaction) => {
  const transactions = getTransactions();
  transactions.push(transaction);
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
};

export const searchInvoiceByNumber = (invoiceNumber) => {
  const transactions = getTransactions();
  return transactions.find(invoice => invoice.invoiceNumber === invoiceNumber);
};

const getTransactions = () => {
  const transactions = JSON.parse(localStorage.getItem(TRANSACTIONS_KEY)) || [];
  return transactions;
};

const transactions = getTransactions();
export default transactions;
