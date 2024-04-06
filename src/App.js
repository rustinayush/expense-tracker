import React, { useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import AddIncomeForm from "./components/AddIncomeForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseTrends from "./components/ExpenseTrends";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [walletBalance, setWalletBalance] = useState(5000);

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <div className="balance-container">
        <h2>Wallet Balance: ${walletBalance}</h2>
        <AddIncomeForm setWalletBalance={setWalletBalance} />
      </div>
      <AddExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
        walletBalance={walletBalance}
        setWalletBalance={setWalletBalance}
      />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseTrends expenses={expenses} />
    </div>
  );
}

export default App;
