import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ getData }) => {
  const collectExpenseForm = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    getData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={collectExpenseForm} />
    </div>
  );
};

export default NewExpense;
