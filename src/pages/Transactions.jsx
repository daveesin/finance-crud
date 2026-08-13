import TransactionsTable from "../components/transaction/TransactionsTable";

function Transactions() {
    return(
        <div className="flex flex-col items-center justify-center gap-3">

            <TransactionsTable />

        </div>
    );
}

export default Transactions;