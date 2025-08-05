import axios from 'axios';

// ✅ Live backend URL deployed on Railway
const BASE_URL = 'https://expense-tracker-production-916a.up.railway.app/api/transactions';

// 🔽 Get all transactions
export const getTransactions = () => axios.get(BASE_URL);

// 🔼 Add a new transaction
export const addTransaction = (data) => axios.post(BASE_URL, data);

// ❌ Delete a transaction by ID
export const deleteTransaction = (id) => axios.delete(`${BASE_URL}/${id}`);
