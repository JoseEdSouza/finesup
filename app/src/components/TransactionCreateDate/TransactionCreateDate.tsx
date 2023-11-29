import "./TransactionCreateDate.css"

function TransactionCreateDate(props:{setDate:(value:string)=>void}) {
    return (
        <div id="transactionCreateDate">
            <label id="transactionDateLabel"><strong>Data</strong></label>
            <input type="date" id="transactionDateInput" placeholder="Selecione a data" onChange={(e) => props.setDate(e.target.value)}/>
        </div>
    )
}

export default TransactionCreateDate