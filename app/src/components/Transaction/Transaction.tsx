import "./Transaction.css";

function Transaction(){
    return(
        <div className="LaunchContainer">
            <img src="./icon_alimentation.svg" className="Icons" alt=""/>
            <label className="NameTransaction"><strong>Pizza</strong></label>
            <label className="TypeTransaction">Alimentação</label>
            <label className="ValueTransactionExpense">R$900,00</label>
        </div>
    );
}

export default Transaction;