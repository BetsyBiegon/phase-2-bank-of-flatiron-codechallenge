// src/components/transactionslist.js
import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ handleDelTransaction, transactions }) {
  //deleting a transaction
  const delTransaction = async function (transactionID) {
    console.log(transactionID);
    try{
      await fetch('http://localhost:8001/transactions/' + transactionID, {method: 'DELETE'});
      handleDelTransaction(transactionID);
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map((transaction, idx)=> (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            delTransaction={delTransaction}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
