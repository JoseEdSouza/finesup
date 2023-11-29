import "./TransactionCreateDescription.css"

function TransactionCreateDescription(props:{setDes:(value:string)=>void}) {
    return (
        <div id="TransactionCreateDescription">
            <label id="transactionDescriptionLabel"><strong>Descrição</strong></label>
            <textarea id="transactionDescriptionTextArea" placeholder="até 100 caracteres" maxLength={100} onChange={(e)=>props.setDes(e.target.value)}></textarea>
        </div>
    )
}

export default TransactionCreateDescription