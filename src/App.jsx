import './App.css'
import {useState} from 'react'

function BudgetTracker(){
//this state holds an array of objects with transaction, data, and amount keys.
const[transactionInputs, setTransactionInputs] = useState([]);  

function Form(){
  function handleSubmit(e){
    e.preventDefault();
      setTransactionInputs(
        [{
          transaction: e.target.transactionInput.value,
          date: e.target.dateInput.value,
          amount: e.target.amountInput.value
        },
        ...transactionInputs]
      );

    } 
    
  return(
    <form onSubmit = {handleSubmit} class = "Form">
    <label htmlFor = "transactionInput"> Transaction: </label>
      <input id = "transactionInput" type="text" required placeholder='Name of Transaction'/>
    <label htmlFor ="dateInput" >date: </label>
      <input id = "dateInput" type="date" required/>
    <label htmlFor = "amountInput">amount: </label>
      <input id ="amountInput" type="number" required placeholder = '- for spendings and + for earnings'/>
    <input type="submit" />
  </form>
  )

}

  return (
    <>
    <Form/>
    <div id = "ContentBody">
      <table id = "TableContent">
        <thead>
          <tr id = "headerRow">
            <th>Transaction</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody id = "dataBody">
          {transactionInputs.map(
            (Inputs)=>{
              let transaction = Inputs.transaction;
              let date = Inputs.date;
              let amount = Inputs.amount;
              return(
                <tr className = "inputRow">
                  <td className = "tableData">{transaction} </td>
                  <td className = "tableData">{date} </td>
                  <td className = "tableData">{amount}</td>
                </tr>
                )
              }
            )
          }
        </tbody>
      </table>

    </div>
    </>
  )


}


export default function App() {
  return (
    <>
    <BudgetTracker/>
    </>
  );
}


