import "./TransactionCreateName.css"

function TransactionCreateName(props:{setName:(name:string)=>void}) {
    return (
        <>
                <div id="transactionCreateName">
                    <label id="TransactionNameLabel"><strong>Nome</strong></label>
                    <input type="text" id="TransactionNameInput" placeholder="Inserir Nome" onChange={(e) => props.setName(e.target.value)}/>
                </div>
        </>
    )
}

export default TransactionCreateName