import { createContext, useEffect, useState } from 'react';
import { getTransactions, addTransaction } from '../services/TransactionService';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch existing transactions from backend
  const fetchTransactions = async () => {
    try {
      const res = await getTransactions();
      console.log("📦 Transactions fetched:", res.data); // Debug
      setTransactions(res.data || []);
    } catch (err) {
      console.error("❌ Error fetching transactions:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add a new transaction and update state
  const createTransaction = async (data) => {
    try {
      const res = await addTransaction(data);
      console.log("✅ Transaction added:", res.data); // Debug
      setTransactions(prev => [res.data, ...prev]);
    } catch (err) {
      console.error("❌ Error adding transaction:", err.message);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction, loading }}>
      {children}
    </TransactionContext.Provider>
  );
};
