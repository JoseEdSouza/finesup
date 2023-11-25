import "./TransactionCreateValue.css"

function TransactionCreateValue(props: { handleValue: (value:number) => void }) {
    return (
        <div id="transactionCreateValue">
            <label id="transactionValueLabel"><strong>Valor</strong></label>
            <input type="number" id="transactionValueInput" placeholder="R$" onChange={(e) => props.handleValue(+ e.target.value)}/>
        </div>
    )
}

export default TransactionCreateValue