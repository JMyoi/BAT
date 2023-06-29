import './App.css'
import {useState} from 'react'


function BudgetTracker(){
    const[transactionInputs, setTransactionInputs] = useState([]);  

    const sampleInput = [
      {
        transaction: "Grocery",
        date: "06-23-2023",
        amount: "400",
        id:"1"
      },
      {
        transaction: "coffee",
        date: "07-23-2023",
        amount:"3",
        id:'2'
      },
      {
        transaction:"soap",
        date: "08-04-2023",
        amount: "2",
        id:'3'
      }
    ];

    const SampleOutput = sampleInput.map(data=>{
      
      return (<tr key = {data.id} className = "inputRow">
        <td className = "tableData">{data.transaction}</td>
        <td className = "tableData">{data.date}</td>
        <td className = "tableData">{data.amount}</td>
      </tr>)
    })
    
    function handleSubmit(e){
      e.preventDefault();
      const formInput = e.target;
      let Transaction = formInput.transactionInput.value;
      let Date = formInput.dateInput.value;
      let Amount = formInput.amountInput.value;

      let NewInput = {
        transaction:Transaction,
        date:Date,
        Amount
      };
      setTransactionInputs(
        [ NewInput, ...transactionInputs]
      );


      //set the transactionsInputs state with the user input from the form 
      //then when rerender happens due to the set state function it will remember the map function to include the new user input.
      
      } //to handle submitting and will render the data into the table


  
  return (
    <>
    
    <form onSubmit = {handleSubmit}>
      <label htmlFor = "transactionInput"> Transaction: </label>
        <input id = "transactionInput" type="text" required/>
      <label htmlFor ="dateInput" >date: </label>
        <input id = "dateInput" type="date" required/>
      <label htmlFor = "amountInput">amount: </label>
        <input id ="amountInput" type="number" required/>
      <input type="submit" />
    </form>

    <div id = "TableDiv">
      <table id = "table">
        <thead>
          <tr id = "headerRow">
            <th>Transaction</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {SampleOutput}
          {transactionInputs.map(
            (Inputs)=>{
              let transaction = Inputs.transaction;
              let date = Inputs.date;
              let amount = Inputs.amout;
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
          
          {/*we need a map function here that will turn the transactionInputs into an array of table row elements.  */}  
        
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

