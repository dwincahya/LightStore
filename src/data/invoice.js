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
