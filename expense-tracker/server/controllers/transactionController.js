const Transaction = require('../models/Transaction');

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a new transaction
exports.addTransaction = async (req, res) => {
  try {
    const { title, amount, type } = req.body;
    const newTransaction = new Transaction({ title, amount, type });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ error: 'Invalid transaction data' });
  }
};
