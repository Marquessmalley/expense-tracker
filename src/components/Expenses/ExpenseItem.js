import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = ({ expense }) => {
  const [title, setTitle] = useState(expense.title);

  const changeTitleHandler = () => {
    setTitle("updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
