import { useOutletContext } from "react-router-dom";
import { Plus, Minus } from 'lucide-react';

function LastTransactionsList({ formatCurrency }){

    const { transactions } = useOutletContext();

    const recentTransactions = [...transactions]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    
    if(recentTransactions.length === 0){
        return (
            <div className="w-full max-w-4xl p-6 text-center rounded-2xl bg-finance-card border border-finance-border text-finance-muted font-['Outfit'] text-sm">
                Nenhuma transação recente encontrada.
            </div>
        );
    }

    return(
        <table className="w-full max-w-4xl border-separate border-spacing-y-2.5">
                    <thead>
                        <tr className="text-xs uppercase border font-semibold text-finance-border tracking-wider">
                            <th className="px-6 py-3 text-center first:rounded-l-xl">Description</th>
                            <th className="px-6 py-3 text-center">Amount</th>
                            <th className="px-6 py-3 text-center">Type</th>
                            <th className="px-6 py-3 text-center">Category</th>
                            <th className="px-6 py-3 text-center last:rounded-r-xl">Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-finance-text">
                        {recentTransactions.map((t) => (
                            <tr key={t.id} className="bg-finance-card hover:bg-finance-card/80 transition-all border border-finance-border">
                                <td className="px-6 py-4 text-left font-['Outfit'] first:rounded-l-xl">
                                    {t.description}
                                </td>
                                <td className="px-6 py-4 font-['Outfit'] text-center">
                                    {formatCurrency(t.amount)}
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
                            </tr>
                        ))}
                    </tbody>
                </table>
    );
}

export default LastTransactionsList;