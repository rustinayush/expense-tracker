import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = ({
  expenses,
  setExpenses,
  walletBalance,
  setWalletBalance,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && category && date) {
      const newExpense = {
        id: uuidv4(),
        title,
        amount: parseFloat(amount),
        category,
        date,
      };
      setExpenses([...expenses, newExpense]);
      setWalletBalance(walletBalance - parseFloat(amount));
      // Reset form fields
      setTitle("");
      setAmount("");
      setCategory("");
      setDate("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
