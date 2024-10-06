import express from 'express';
import cors from 'cors';
import transactions from '../../src/data/invoice'; 
const app = express();
app.use(cors());

app.get('/transactions', (req, res) => {
  res.json(transactions);
});

app.get('/transactions/:invoiceNumber', (req, res) => {
  const { invoiceNumber } = req.params;
  const result = transactions.filter(transaction =>
    transaction.invoiceNumber === invoiceNumber
  );

  if (result.length === 0) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }

  res.json(result);
});

export default app;
