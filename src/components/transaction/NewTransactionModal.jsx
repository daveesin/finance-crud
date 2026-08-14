import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { X, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { TRANSACTION_CATEGORIES } from "../../constants/categories";

function NewTransactionModal({ isModalOpen, onCloseModal, editingTransaction }) {

    const { handleAddNewTransaction, handleEditTransaction } = useOutletContext();

    const [description, setDescription] = useState(editingTransaction?.description || "");
    const [amount, setAmount] = useState(editingTransaction?.amount || "");
    const [type, setType] = useState(editingTransaction?.type || "income");
    const [category, setCategory] = useState(editingTransaction?.category || "");

    if (!isModalOpen) return null;

    //Define a function to clear the Modal:
    function handleClearModal() {
        setDescription("");
        setAmount(0);
        setType("");
        setCategory("");
    }

    //Define a function to use on the submit button to save the new transaction edit the current one and clear the modal:
    function handleSubmit(e) {
        e.preventDefault();

        if(editingTransaction !== null){

            const updatedTransaction = {
                ...editingTransaction,
                description: description,
                amount: Number(amount),
                type: type,
                category: category
            };

            handleEditTransaction(updatedTransaction);
            handleClearModal();
            onCloseModal();

        } else {

            const formattedDate = new Date().toISOString().split('T')[0];
            
            handleAddNewTransaction(
                description, 
                Number(amount),
                type, 
                category, 
                formattedDate
            );
            handleClearModal();
            onCloseModal();
        }
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-finance-card border border-finance-border rounded-2xl p-6 shadow-2xl relative">
                
                <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-finance-text font-['Outfit']">
                    {editingTransaction !== null ? editingTransaction.description : 'New Transaction'}
                </h2>
                <button
                    onClick={onCloseModal}
                    className="text-finance-muted hover:text-finance-text transition-colors p-1 rounded-lg hover:bg-finance-bg"
                >
                    <X className="w-5 h-5" />
                </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-finance-muted uppercase tracking-wider">
                            Description
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Ex: Salário, Mercado..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-finance-bg border border-finance-border text-finance-text placeholder:text-finance-muted text-sm focus:outline-none focus:border-finance-income font-['Outfit']"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-finance-muted uppercase tracking-wider">
                            Amount (R$)
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            required
                            placeholder="0,00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-finance-bg border border-finance-border text-finance-text placeholder:text-finance-muted text-sm focus:outline-none focus:border-finance-income font-['Outfit']"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-finance-muted uppercase tracking-wider">
                            Type
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setType("income")}
                                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                                type === "income"
                                    ? "bg-finance-income/10 border-finance-income text-finance-income"
                                    : "border-finance-border text-finance-muted hover:bg-finance-bg"
                                }`}
                            >
                                <ArrowUpCircle className="w-4 h-4" />
                                <span>Income</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setType("expense")}
                                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                                type === "expense"
                                    ? "bg-finance-expense/10 border-finance-expense text-finance-expense"
                                    : "border-finance-border text-finance-muted hover:bg-finance-bg"
                                }`}
                            >
                                <ArrowDownCircle className="w-4 h-4" />
                                <span>Expense</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-finance-muted uppercase tracking-wider">
                            Category
                        </label>
                        <select
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-finance-bg border border-finance-border text-finance-text text-sm focus:outline-none focus:border-finance-income font-['Outfit'] cursor-pointer"
                        >
                            <option value="" disabled hidden>
                                Selecione uma categoria...
                            </option>
                            {TRANSACTION_CATEGORIES.map((cat) => (
                                <option 
                                    key={cat.id} 
                                    value={cat.label} 
                                    className="bg-finance-card text-finance-text"
                                >
                                    {cat.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onCloseModal}
                            className="px-4 py-2.5 rounded-xl border border-finance-border text-finance-muted hover:text-finance-text font-semibold text-sm transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2.5 rounded-xl bg-finance-income text-finance-bg font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
                        >
                            Save
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default NewTransactionModal;