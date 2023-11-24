import "./TransactionCreateDate.css"

function TransactionCreateDate() {
    return (
        <div id="transactionCreateDate">
            <label id="transactionDateLabel"><strong>Data</strong></label>
            <input type="date" id="transactionDateInput" placeholder="Selecione a data" />
        </div>
    )
}

export default TransactionCreateDate