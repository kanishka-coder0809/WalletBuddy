import { createContext, useEffect, useState } from 'react';
import { getTransactions, addTransaction, deleteTransaction } from '../services/TransactionService';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      const res = await getTransactions();
      setTransactions(res.data || []);
    } catch (err) {
      console.error("❌ Error fetching transactions:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const createTransaction = async (data) => {
    try {
      const res = await addTransaction(data);
      setTransactions(prev => [res.data, ...prev]);
    } catch (err) {
      console.error("❌ Error adding transaction:", err.message);
    }
  };

  const removeTransaction = async (id) => {
    try {
      await deleteTransaction(id);
      setTransactions(prev => prev.filter(tx => tx._id !== id));
    } catch (err) {
      console.error("❌ Failed to delete transaction:", err.message);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction, removeTransaction, loading }}>
      {children}
    </TransactionContext.Provider>
  );
};
