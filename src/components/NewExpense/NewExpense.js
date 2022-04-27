import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ getData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const collectExpenseForm = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    getData(expenseData);
  };

  const handleIsEditing = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={handleIsEditing}>Add Expense</button>}

      {isEditing && (
        <ExpenseForm
          onSaveData={collectExpenseForm}
          editingState={setIsEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
