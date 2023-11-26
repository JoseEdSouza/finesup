import "./TransactionCreateName.css"

function TransactionCreateName(props: { editable: number, name:string }) {
    return (
        <>
            {props.editable === 0 ?
                <div id="transactionCreateName">
                    <label id="TransactionNameLabel"><strong>Nome</strong></label>
                    <input type="text" id="TransactionNameInput" placeholder="Inserir Nome" />
                </div>
                : <div id="transactionCreateName">
                    <label id="TransactionNameLabel"><strong>Nome</strong></label>
                    <input type="text" id="TransactionNameInput" placeholder="Inserir Nome" value={props.name}/>
                </div>
            }
        </>
    )
}

export default TransactionCreateName