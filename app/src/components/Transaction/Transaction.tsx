import "./Transaction.css";

function Transaction(props:{transactionName:string, transactionValue:number, transactionType:number}){
    let type = props.transactionType === 0 ? "ValueTransactionRevenue" :"ValueTransactionExpense"
    let value = (Number(props.transactionValue)).toFixed(2)

    return(
        <div className="LaunchContainer">
            <img src="/icon_alimentation.svg" id="iconInTransaction"/>
            <label className="NameTransaction"><strong>{props.transactionName}</strong></label>
            <label className="TypeTransaction">Alimentação</label>
            <label className={type}>R${value}</label>
        </div>
    );
}

export default Transaction;