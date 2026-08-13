import { useState } from "react";
import { Outlet } from "react-router-dom";
import { v4 } from "uuid";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {

  //Define default transactions list:
  const [transactions, setTransactions] = useState([
    {id: "1", description: "Salário", amount: 3500, type: "income", category: "Trabalho", date: "2026-08-01"},
    {id: "2", description: "Mercado", amount: 600, type: "expense", category: "Alimentação", date: "2026-08-05"}
  ]);

  //Define the current balance using the transactions list:
  const currentBalance = transactions.reduce((acc, item) => {
    return item.type === "income" ? acc + item.amount : acc - item.amount;
  }, 0);

  //Define a function to add a new transaction in the list:
  function handleAddNewTransaction(description, amount, type, category, date){

    const newTransaction = {
      id: v4(),
      description: description,
      amount: amount,
      type: type,
      category: category,
      date: date
    }

    setTransactions([...transactions, newTransaction]);
  }

  //Define a function to delete a task:
  function handleDeleteTransaction(transaction) {
    setTransactions(transactions.filter( (t) => 
      t.id !== transaction.id
    ));
  }

  //Return the component render:
  return(
    <div className="flex flex-col justify-between">

      <Navbar balance={currentBalance} />
      <main className="min-h-screen mt-6">
        <Outlet context={{ transactions, setTransactions, handleAddNewTransaction, handleDeleteTransaction }} />
      </main>
      <Footer />
    
    </div>
  );
}

export default App;