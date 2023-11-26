import "./TransactionCreateName.css"

function TransactionCreateName() {
    return (
        <div id="transactionCreateName">
            <label id="TransactionNameLabel"><strong>Nome</strong></label>
            <input type="text" id="TransactionNameInput" placeholder="Inserir Nome"/>
        </div>
    )
}

export default TransactionCreateName