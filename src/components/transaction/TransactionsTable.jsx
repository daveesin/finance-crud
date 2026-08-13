import { useOutletContext } from "react-router-dom"
import { Plus, Minus, Search, Trash} from "lucide-react"
import { useState } from "react";

function TransactionsTable({ onNTClick }) {

    const { transactions, handleDeleteTransaction } = useOutletContext();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTransactions = transactions.filter((t) => t.description.toLowerCase().includes(searchTerm.toLowerCase()));

    return(
        <div className="w-full max-w-4xl flex flex-col justify-center items-center - gap-5">

            <div className="w-full text-left">
                <h1 className="text-2xl font-bold text-gray-900 font-['Outfit'] tracking-tight">
                    Transações
                </h1>
                <p className="text-sm text-gray-500">
                    Gerencie e acompanhe todos os seus ganhos e despesas.
                </p>
            </div>

            <div className="w-full max-w-4xl bg-finance-muted border border-finance-border rounded-2xl p-5 shadow-sm">
                <div className="flex gap-3 items-center relative w-full max-w-4xl">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-finance-muted gap-4" />
                    <input
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-finance-card border border-finance-border text-finance-text placeholder:text-finance-muted font-['Outfit'] text-sm transition-all focus:outline-none focus:border-finance-income focus:ring-1 focus:ring-finance-income"
                        type="text"
                        placeholder="Search for a description..."
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <button 
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-finance-income border border-finance-border text-finance-bg font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm"
                        onClick={() => onNTClick()}
                    >
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                        <span>New Transaction</span>
                    </button>
                </div>

                <table className="w-full max-w-4xl border-separate border-spacing-y-2.5">
                    <thead>
                        <tr className="text-xs uppercase border font-semibold text-finance-border tracking-wider">
                            <th className="px-6 py-3 text-center first:rounded-l-xl">Description</th>
                            <th className="px-6 py-3 text-center">Amount</th>
                            <th className="px-6 py-3 text-center">Type</th>
                            <th className="px-6 py-3 text-center">Category</th>
                            <th className="px-6 py-3 text-center">Date</th>
                            <th className="px-6 py-3 text-center  last:rounded-r-xl" />
                        </tr>
                    </thead>
                    <tbody className="text-sm text-finance-text">
                        {filteredTransactions.map((t) => (
                            <tr key={t.id} className="bg-finance-card hover:bg-finance-card/80 transition-all border border-finance-border">
                                <td className="px-6 py-4 text-left font-['Outfit'] first:rounded-l-xl">
                                    {t.description}
                                </td>
                                <td className="px-6 py-4 font-['Outfit'] text-center">
                                    R$ {t.amount}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center">
                                        <span className={`p-1.5 rounded-full ${
                                            t.type === 'income' 
                                                ? 'bg-finance-income/10 text-finance-income' 
                                                : 'bg-finance-expense/10 text-finance-expense'
                                        }`}>
                                            {t.type === 'income' ? <Plus className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-['Outfit'] text-center">
                                    {t.category}
                                </td>
                                <td className="px-6 py-4 font-['Outfit'] text-center last:rounded-r-xl">
                                    {t.date}
                                </td>
                                
                                <td className="px-6 py-4 text-center last:rounded-r-xl">
                                    <button 
                                        type="button"
                                        onClick={() => handleDeleteTransaction(t)}
                                        className="text-finance-expense hover:text-red-800 transition-colors p-1"
                                    >
                                        <Trash className="w-4 h-4 mx-auto cursor-pointer" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default TransactionsTable;