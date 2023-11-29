import "./TransactionCreateValue.css"

function TransactionCreateValue(props:{setValue:(value:number)=>void}) {
    return (
        <div id="transactionCreateValue">
            <label id="transactionValueLabel"><strong>Valor</strong></label>
            <input type="number" id="transactionValueInput" placeholder="R$" onChange={(e)=>props.setValue(+ e.target.value)}/>
        </div>
    )
}

export default TransactionCreateValue