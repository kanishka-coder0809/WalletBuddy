const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// ✅ Get all transactions (with optional date filter)
router.get('/', async (req, res) => {
  try {
    const { from, to, type } = req.query;
    let filter = {};

    if (from && to) {
      filter.date = { $gte: new Date(from), $lte: new Date(to) };
    }
    if (type && type !== 'all') {
      filter.type = type;
    }

    const transactions = await Transaction.find(filter);
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Add transaction
router.post('/', async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    const saved = await newTransaction.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Delete transaction by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Transaction.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
