import React, { useState } from "react";

const AddIncomeForm = ({ setWalletBalance }) => {
  const [income, setIncome] = useState("");

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (income) {
      setWalletBalance((prevBalance) => prevBalance + parseFloat(income));
      setIncome("");
    } else {
      alert("Please enter an amount.");
    }
  };

  return (
    <form onSubmit={handleAddIncome}>
      <input
        type="number"
        placeholder="Add Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddIncomeForm;
