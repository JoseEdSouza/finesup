import { useState } from "react";
import Transaction from "../Transaction/Transaction";
import "./TransactionGroup.css";

function TransactionGroup(props:{values:Array<number>, names:Array<string>, categories:Array<string>, date: Date, description:Array<string>, dates:Array<string>}){
    let [listTransaction] = useState<JSX.Element[]>([])

    const loadTransactions = () =>{
        for(let i = 0; i < props.values.length; i ++){
            listTransaction.push(<Transaction transactionType={1} transactionName={props.names[i]} category={props.categories[i]} transactionValue={props.values[i]} date={props.dates[i]} description={props.description[i]}/>)
        }
        return listTransaction
    }

    return(
        <section className="TransactionGroupContainer">
            <label className="LabelTransactionDate">{props.date.toISOString().slice(0, 10)}</label>
            {loadTransactions()}
        </section>
    );
}

export default TransactionGroup;