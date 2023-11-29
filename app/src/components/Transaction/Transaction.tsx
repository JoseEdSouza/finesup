import { useNavigate } from "react-router-dom";
import CategoriesColorsExpenses from "../../utils/CategoriesColorsExpense";
import CategoriesColorsRevenues from "../../utils/CategoriesColorsRevenues";
import CategoriesTradutionExpense from "../../utils/CategoriesTradutionExpense";
import CategoriesTradutionRevenue from "../../utils/CategoriesTradutionRevenue";
import "./Transaction.css";

function Transaction(props: { transactionName: string, transactionValue: number, transactionType: number, category: string, description:string, date:string }) {
    let type = props.transactionType === 0 ? "ValueTransactionRevenue" : "ValueTransactionExpense"
    let value = (Number(props.transactionValue)).toFixed(2)
    let category = "/icon_" + props.category + ".svg"
    const navigate = useNavigate()

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

    let color: string | undefined
    if (props.transactionType === 0) {
        const keys = Object.keys(CategoriesColorsRevenues) as Array<keyof typeof CategoriesColorsRevenues>
        for (const key of keys) {
            if (key === props.category.toLocaleUpperCase()) {
                color = CategoriesColorsRevenues[key]
                break
            }
        }
    }
    else {
        const keys = Object.keys(CategoriesColorsExpenses) as Array<keyof typeof CategoriesColorsExpenses>
        for (const key of keys) {
            if (key === props.category.toLocaleUpperCase()) {
                color = CategoriesColorsExpenses[key]
                break
            }
        }
    }

    return (
        <div className="LaunchContainer" style={{cursor: "pointer"}} onClick={() => navigate("/2/transactionHistory/transactionDetailed", {replace: true, state:{name:props.transactionName, value:props.transactionValue, descriprion:props.description, category:props.category, date:props.date}})}>
            <img src={category} id="iconInTransaction" style={{backgroundColor: color}}/>
            <label className="NameTransaction"><strong>{props.transactionName}</strong></label>
            <label className="TypeTransaction">{transaction}</label>
            <label className={type}>R${value}</label>
        </div>
    );
}

export default Transaction;