import React from "react";

const ExpenseList = ({ expenses, setExpenses }) => {
  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
            <span>{expense.category}</span>
            <span>{expense.date}</span>
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
