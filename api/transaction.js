import express from 'express';
import cors from 'cors';
import transactions from '../../src/data/invoice.js';  // Pastikan path ini benar.

const app = express();
app.use(cors());

// Rute API
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

app.get('/api/transactions/:invoiceNumber', (req, res) => {
  const { invoiceNumber } = req.params;

  const result = transactions.filter(transaction =>
    transaction.invoiceNumber === invoiceNumber
  );

  if (result.length === 0) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }

  res.json(result);
});

// Serverless Function Handler
export default app;
