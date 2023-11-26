import { useNavigate } from "react-router-dom";
import CategoriesTradutionExpense from "../../utils/CategoriesTradutionExpense";
import CategoriesTradutionRevenue from "../../utils/CategoriesTradutionRevenue";
import "./Transaction.css";
import { useState } from "react";

function Transaction(props: { transactionName: string, transactionValue: number, transactionType: number, category: string, date: Date, description: string }) {
    const [data] = useState({
        name: props.transactionName,
        Date: props.date,
        Value: props.transactionValue,
        Description: props.description,
        Category: props.category
    })

    const navigate = useNavigate()
    let type = props.transactionType === 0 ? "ValueTransactionRevenue" : "ValueTransactionExpense"
    let value = (Number(props.transactionValue)).toFixed(2)

    let transaction: string | undefined
    if (props.transactionType === 0) {
        const keys = Object.keys(CategoriesTradutionRevenue) as Array<keyof typeof CategoriesTradutionRevenue>
        for (const key of keys) {
            if (key === props.category.toLocaleUpperCase()) {
                transaction = CategoriesTradutionRevenue[key]
                break
            }
        }
    }
    else {
        const keys = Object.keys(CategoriesTradutionExpense) as Array<keyof typeof CategoriesTradutionExpense>
        for (const key of keys) {
            if (key === props.category.toLocaleUpperCase()) {
                transaction = CategoriesTradutionExpense[key]
                break
            }
        }
    }

    return (
        <div className="LaunchContainer" style={{cursor: "pointer"}} onClick={() => {navigate("/2/transactionHistory/detailedTransaction", {replace: true, state:{data}})}}>
            <img src="/icon_alimentation.svg" id="iconInTransaction" />
            <label className="NameTransaction"><strong>{props.transactionName}</strong></label>
            <label className="TypeTransaction">{transaction}</label>
            <label className={type}>R${value}</label>
        </div>
    );
}

export default Transaction;