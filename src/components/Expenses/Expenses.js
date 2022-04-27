import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpenseList filterExpenses={filterExpenses} />
    </Card>
  );
};

export default Expenses;
