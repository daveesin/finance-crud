import { useOutletContext } from "react-router-dom";

function Transactions() {

    const { transactions, setTransactions } = useOutletContext();

    return(
        <div className="flex flex-col items-center justify-center gap-3">

            <table className="border-separate border-spacing-y-2">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-center">Description</th>
                        <th className="px-6 py-3 text-center">Amount</th>
                        <th className="px-6 py-3 text-center">Type</th>
                        <th className="px-6 py-3 text-center">Category</th>
                        <th className="px-6 py-3 text-center">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t) => (
                        <tr key={t.id}>
                            <td className="px-6 py-3 text-center">
                                {t.description}
                            </td>
                            <td className="px-6 py-3 text-center">
                                {t.amount}
                            </td>
                            <td className="px-6 py-3 text-center">
                                {t.type}
                            </td>
                            <td className="px-6 py-3 text-center">
                                {t.category}
                            </td>
                            <td className="px-6 py-3 text-center">
                                {t.date}
                            </td>
                        </tr>
                    ))}
                </tbody>
            
            </table>

        </div>
    );
}

export default Transactions;