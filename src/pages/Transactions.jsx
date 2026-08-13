import { useState } from "react";
import TransactionsTable from "../components/transaction/TransactionsTable";
import NewTransactionModal from "../components/transaction/NewTransactionModal";

function Transactions() {

    const [isTModalOpen, setIsTModalOpen] = useState(false);

    return(
        <div className="flex flex-col items-center justify-center gap-3">

            <TransactionsTable onNTClick={setIsTModalOpen} />

            <NewTransactionModal 
                isTModalOpen={isTModalOpen}
                onCloseNTModal={setIsTModalOpen}
            />

        </div>
    );
}

export default Transactions;