import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { v4 } from "uuid";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {

  //Define transactions list based on the localStorage:
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  //Define useEffect to save every change on transactions list on the localStorage:
  useEffect( () => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

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

  //Define a function to delete a transaction:
  function handleDeleteTransaction(transactionId) {
    setTransactions(transactions.filter( (t) => 
      t.id !== transactionId
    ));
  }


  //Define a function to edit a transaction:
  function handleEditTransaction(updatedTransaction) {
    setTransactions((prevTransactions) =>
      prevTransactions.map((t) => 
      t.id === updatedTransaction.id ? updatedTransaction : t
    ))
  }

  //Return the component render:
  return(
    <div className="flex flex-col justify-between">

      <Navbar balance={currentBalance} />
      <main className="min-h-screen mt-6">
        <Outlet context={{ transactions, setTransactions, handleAddNewTransaction, handleDeleteTransaction, handleEditTransaction }} />
      </main>
      <Footer />
    
    </div>
  );
}

export default App;