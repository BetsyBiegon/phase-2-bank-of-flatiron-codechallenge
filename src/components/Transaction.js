import React from "react";

function Transaction({transaction: {id, date, category, amount, description}, delTransaction,}) {
  
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={()=>delTransaction(id)}>Delete</button></td>
    </tr>
  );
}

export default Transaction;