import { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const DateFilter = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const { fetchTransactions } = useContext(TransactionContext);

  const handleFilter = () => {
    fetchTransactions(from, to);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <label>From: </label>
      <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
      <label style={{ marginLeft: '10px' }}>To: </label>
      <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      <button onClick={handleFilter} style={{ marginLeft: '10px' }}>Filter</button>
    </div>
  );
};

export default DateFilter;
