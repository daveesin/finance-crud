import { useState } from "react";
import TransactionsTable from "../components/transaction/TransactionsTable";
import NewTransactionModal from "../components/transaction/NewTransactionModal";

function Transactions() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTransaction, setEditingTransaction] = useState(null);

    //Define a function to handle the modal close:
    function handleCloseModal() {
        setEditingTransaction(null);
        setIsModalOpen(false);
    }

    //Define a function to open modal on edit mode:
    function handleEditModal(transaction) {
        setEditingTransaction(transaction);
        setIsModalOpen(true);
    }

    //Define a function to open modal on new transaction mode:
    function handleStartNewModal() {
        setEditingTransaction(null);
        setIsModalOpen(true);
    }

    return(
        <div className="flex flex-col items-center justify-center gap-3">

            <TransactionsTable
                onNTClick={handleStartNewModal}
                onETClick={handleEditModal}
            />

            <NewTransactionModal
                key={editingTransaction ? editingTransaction.id : 'new-transaction'}
                isModalOpen={isModalOpen}
                onCloseModal={handleCloseModal}
                editingTransaction={editingTransaction}
            />

        </div>
    );
}

export default Transactions;