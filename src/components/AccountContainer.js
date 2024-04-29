// src/components/accountcontainer.js
import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, handleAddTransaction, handleSearch, handleDelTransaction }) {
  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm handleAddTransaction={handleAddTransaction} transactions={transactions}/>
      <TransactionsList handleDelTransaction={handleDelTransaction} transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
