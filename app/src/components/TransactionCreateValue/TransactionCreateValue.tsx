import "./TransactionCreateValue.css"

function TransactionCreateValue() {
    return (
        <div id="transactionCreateValue">
            <label id="transactionValueLabel"><strong>Valor</strong></label>
            <input type="number" id="transactionValueInput" placeholder="R$" />
        </div>
    )
}

export default TransactionCreateValue