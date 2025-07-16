import { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const FilterControls = () => {
  const { fetchTransactions } = useContext(TransactionContext);
  const [type, setType] = useState('all');

  const handleTypeChange = (e) => {
    const selected = e.target.value;
    setType(selected);
    fetchTransactions(null, null, selected);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <label>Filter by Type: </label>
      <select value={type} onChange={handleTypeChange}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default FilterControls;
