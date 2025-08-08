import React, { createContext, useState, useEffect } from 'react';

// ✅ Correct relative path to api.js
import { getTransactions, addTransaction as apiAdd, deleteTransaction as apiDelete } from '../api';

export const TransactionContext = createContext();

// Backend URL
const BACKEND_URL = 'https://expense-tracker-production-916a.up.railway.app/api/transactions';

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all transactions from backend
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await getTransactions(); // using api.js function
        setTransactions(data);
      } catch (error) {
        console.error("❌ Failed to fetch transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  // ✅ Add new transaction
  const addTransaction = async (transaction) => {
    try {
      const { data: newTransaction } = await apiAdd(transaction); // using api.js function
      setTransactions([...transactions, newTransaction]);
    } catch (error) {
      console.error('❌ Error adding transaction:', error);
    }
  };

  // ✅ Delete transaction
  const deleteTransaction = async (id) => {
    try {
      await apiDelete(id); // using api.js function
      setTransactions(transactions.filter((t) => t._id !== id));
    } catch (error) {
      console.error('❌ Error deleting transaction:', error);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        addTransaction,
        deleteTransaction,
        loading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
