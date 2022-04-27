import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const collectNewExpenseData = (expenseData) => {
    console.log(expenseData);
  };
  return (
    <div className="App">
      <h1>Expense Tracker App</h1>
      <NewExpense getData={collectNewExpenseData} />
      <Expenses />
    </div>
  );
};

export default App;
