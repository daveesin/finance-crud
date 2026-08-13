function NewTransactionModal({ isTModalOpen, onCloseNTModal }) {
    return(
        <div className="flex flex-col items-center justify-center gap-4">
            
            {isTModalOpen && (
                <div>
                    <h1>New Transaction Modal</h1>
                    <button onClick={() => onCloseNTModal()}>Close</button>
                </div>
            )}
            
        </div>
    );
}

export default NewTransactionModal;