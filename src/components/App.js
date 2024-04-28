import React, { useEffect, useState } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const handleFormSubmit = formData => {
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newTransaction => {
      setTransactions([...transactions, newTransaction]);
    });
  };

  return (
    <div className="ui container">
      <h1>Bank of Flatiron</h1>
      <TransactionForm onSubmit={handleFormSubmit} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
