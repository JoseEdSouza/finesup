import "./TransactionCreateDescription.css"

function TransactionCreateDescription() {
    return (
        <div id="TransactionCreateDescription">
            <label id="transactionDescriptionLabel"><strong>Descrição</strong></label>
            <textarea id="transactionDescriptionTextArea" placeholder="até 100 caracteres" maxLength={100}></textarea>
        </div>
    )
}

export default TransactionCreateDescription