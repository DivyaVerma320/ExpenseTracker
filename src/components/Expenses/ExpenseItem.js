import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem = (props) => { //props is an object which have attributes as properties(like date,title etc)
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate dateCal={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
