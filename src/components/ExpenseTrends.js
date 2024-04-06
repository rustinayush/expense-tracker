import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ExpenseTrends = ({ expenses }) => {
  const categories = {};
  expenses.forEach((expense) => {
    categories[expense.category] =
      (categories[expense.category] || 0) + expense.amount;
  });

  const data = Object.keys(categories).map((category) => ({
    category,
    amount: categories[category],
  }));

  return (
    <div>
      <h2>Expense Trends</h2>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ExpenseTrends;
