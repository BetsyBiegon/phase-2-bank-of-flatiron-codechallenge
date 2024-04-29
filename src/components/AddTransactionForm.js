import React from "react";

function AddTransactionForm({handleAddTransaction}) {
  const [formData, setFormData] = React.useState({
    date:"",
    description: "",
    category:"",
    amount: null,
  });
  //posting the transaction
  const handlePostTransaction = async (event) => {
      event.preventDefault();
      console.log(formData);
      try {
        const response = await fetch("http://localhost:8001/transactions", {
          method: "POST",
          headers: {"Content-Type": 'application/json'},
          body: JSON.stringify({
            date: formData.date,
            description: formData.description,
            category: formData.category,
            amount: formData.amount,
          }),
        });
        const jsonResponse = await response.json();
        handleAddTransaction(jsonResponse);
        setFormData({
          date: "",
          description: "",
          category: "",
          amount: null,
        });
      } catch (error) {
        console.log(error);
      }
  };
  //handling changes in the transactions
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className="ui segment">
      <form onSubmit={handlePostTransaction} className="ui form">
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;