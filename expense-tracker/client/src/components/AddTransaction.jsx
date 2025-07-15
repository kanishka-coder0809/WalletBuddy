// src/components/AddTransaction.jsx
import { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const AddTransaction = () => {
  const { createTransaction } = useContext(TransactionContext);
  const [form, setForm] = useState({ title: '', amount: '', type: 'expense' });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTransaction({
      ...form,
      amount: parseFloat(form.amount),
    });
    setForm({ title: '', amount: '', type: 'expense' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
      />
      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTransaction;
