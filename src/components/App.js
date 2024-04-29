import React from "react";
import AccountContainer from "./AccountContainer";

async function getTransactions() {
  try {
    const response = await fetch('http://localhost:8001/transactions');
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}

function App() {
  const [transactions, setTransactions] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const fetchedTransactions = await getTransactions();
      setTransactions(fetchedTransactions);
    };

    fetchData();  // Call the fetchData function inside useEffect
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleDelTransaction = (transactionID) => {
    const filterTrans = transactions.filter(
      (trans) => trans.id !== transactionID
    );
    setTransactions(filterTrans);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filterTrans = transactions.filter(
        (trans) => trans.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTransactions(filterTrans);
    } else {
      getTransactions(); // Use the getTransactions function defined outside useEffect
    }
  };

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
        handleAddTransaction={handleAddTransaction}
        transactions={transactions}
        handleSearch={handleSearch}
        handleDelTransaction={handleDelTransaction}
      />
    </div>
  );
}

export default App;
