// src/components/TransactionList.js
import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactions }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;
