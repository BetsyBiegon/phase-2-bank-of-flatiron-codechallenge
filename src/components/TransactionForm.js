// src/components/TransactionForm.js
import React, { useState } from "react";

const TransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="fields">
        <div className="field">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default TransactionForm;
