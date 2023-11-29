import { useNavigate } from "react-router-dom";
import CategoriesColorsExpenses from "../../utils/CategoriesColorsExpense";
import CategoriesColorsRevenues from "../../utils/CategoriesColorsRevenues";
import CategoriesTradutionExpense from "../../utils/CategoriesTradutionExpense";
import CategoriesTradutionRevenue from "../../utils/CategoriesTradutionRevenue";
import "./Transaction.css";
import { ExpenseCategories, ExpenseCategory, RevenueCategories, RevenueCategory } from "../../models/Category";
import { Nullable } from "../../types";

type Category = ExpenseCategory | RevenueCategory

const getCategoryPropById = (id: number, type: number): Nullable<String> => {
    let categories: any;
    if (type === 0) {
        categories = ExpenseCategories;
    } else if (type === 1) {
        categories = RevenueCategories;
    } else {
        return null;
    }

    for (let prop in categories) {
        if (categories[prop].id === id) {
            console.log(prop)
            return prop;
        }
    }
    return null;
}


function Transaction(props: { transactionName: string, transactionValue: number, transactionType: number, category: Nullable<Category>, description: string, date: string, categoryPrint:string }) {
    let type = props.transactionType === 0 ? "ValueTransactionRevenue" : "ValueTransactionExpense"
    let value = (Number(props.transactionValue)).toFixed(2)
    let category = "/icon_" + (getCategoryPropById(props.category?.id ?? 2, props.transactionType)?.toLowerCase() ?? "alimentation") + ".svg"
    console.log(category)
    console.log(props.category)
    const navigate = useNavigate()

    let transaction: string | undefined
    if (props.transactionType === 0) {
        const keys = Object.keys(CategoriesTradutionRevenue) as Array<keyof typeof CategoriesTradutionRevenue>
        for (const key of keys) {
            if (key === props.category?.name.toLocaleUpperCase() ?? "alimentation") {
                transaction = CategoriesTradutionRevenue[key]
                break
            }
        }
    }
    else {
        const keys = Object.keys(CategoriesTradutionExpense) as Array<keyof typeof CategoriesTradutionExpense>
        for (const key of keys) {
            if (key === props.category?.name.toLocaleUpperCase() ?? "alimentation") {
                transaction = CategoriesTradutionExpense[key]
                break
            }
        }
    }

    let color: string | undefined
    if (props.transactionType === 0) {
        const keys = Object.keys(CategoriesColorsRevenues) as Array<keyof typeof CategoriesColorsRevenues>
        for (const key of keys) {
            if (key === props.category?.name.toLocaleUpperCase() ?? "alimentation") {
                color = CategoriesColorsRevenues[key]
                break
            }
        }
    }
    else {
        const keys = Object.keys(CategoriesColorsExpenses) as Array<keyof typeof CategoriesColorsExpenses>
        for (const key of keys) {
            if (key === props.category?.name.toLocaleUpperCase() ?? "alimentation") {
                color = CategoriesColorsExpenses[key]
                break
            }
        }
    }

    return (
        <div className="LaunchContainer" style={{ cursor: "pointer" }} onClick={() => navigate("/2/transactionHistory/transactionDetailed", { replace: true, state: { name: props.transactionName, value: props.transactionValue, descriprion: props.description, category: props.categoryPrint, date: props.date } })}>
            <img src={category} id="iconInTransaction" style={{ backgroundColor: color }} />
            <label className="NameTransaction"><strong>{props.transactionName}</strong></label>
            <label className="TypeTransaction">{transaction}</label>
            <label className={type}>R${value}</label>
        </div>
    );
}

export default Transaction;