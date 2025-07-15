const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  type: String, // 'income' or 'expense'
}, { timestamps: true }); // <== needed for date filter to work

module.exports = mongoose.model('Transaction', transactionSchema);
