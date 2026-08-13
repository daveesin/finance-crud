import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {

  const [transactions, setTransactions] = useState([
    {id: "1", description: "Salário", amount: 3500, type: "income", category: "Trabalho", date: "2026-08-01"},
    {id: "2", description: "Mercado", amount: 600, type: "expense", category: "Alimentação", date: "2026-08-05"}
  ]);

  const currentBalance = transactions.reduce((acc, item) => {
    return item.type === "income" ? acc + item.amount : acc - item.amount;
  }, 0);

  return(
    <div className="flex flex-col justify-between">

      <Navbar balance={currentBalance} />
      <main className="min-h-screen">
        <Outlet context={{transactions, setTransactions}} />
      </main>
      <Footer />
    
    </div>
  );
}

export default App;