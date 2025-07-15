import './App.css';
import Summary from './components/Summary';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import DateFilter from './components/DateFilter'; // ⬅️ NEW
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <h1>💸 Expense Tracker</h1>
        <Summary />
        <DateFilter /> {/* ⬅️ NEW */}
        <AddTransaction />
        <TransactionList />
      </div>
    </TransactionProvider>
  );
}

export default App;
