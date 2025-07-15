import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const COLORS = ['#FF8042', '#00C49F'];

const ChartSummary = () => {
  const { transactions } = useContext(TransactionContext);

  const totalIncome = transactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpense = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const data = [
    { name: 'Income', value: totalIncome },
    { name: 'Expense', value: totalExpense },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>📊 Income vs Expense</h3>
      <PieChart width={300} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ChartSummary;
