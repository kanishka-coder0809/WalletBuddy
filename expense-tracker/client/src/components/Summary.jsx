// client/src/components/Summary.jsx
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const Summary = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>💼 Balance: ₹{balance}</p>
      <p>🟩 Income: ₹{income}</p>
      <p>🟥 Expense: ₹{expense}</p>
    </div>
  );
};

export default Summary;
