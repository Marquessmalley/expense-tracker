import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ filterExpenses }) => {
  if (filterExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found..</h2>;
  }
  return (
    <ul>
      {filterExpenses.map((item) => {
        return <ExpenseItem key={item.id} expense={item} />;
      })}
    </ul>
  );
};

export default ExpensesList;
