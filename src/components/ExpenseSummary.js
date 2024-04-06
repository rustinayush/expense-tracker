import React from "react";

const ExpenseSummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div>
      <h2>Expense Summary</h2>
      <p>Total Expenses: ${totalExpenses}</p>
    </div>
  );
};

export default ExpenseSummary;
