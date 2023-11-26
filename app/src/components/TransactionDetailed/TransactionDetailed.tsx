import { useLocation } from "react-router-dom"
import TransactionCreateName from "../TransactionCreateName/TransactionCreateName"
import "./TransactionDetailed.css"
import TransactionCreateDate from "../TransactionCreateDate/TransactionCreateDate"
import TransactionCreateValue from "../TransactionCreateValue/TransactionCreateValue"
import TransactionCreateDescription from "../TransactionCreateDescription/TransactionCreateDescription"
import TransactionCreateCategory from "../TransactionCreateCategory/TransactionCreateCategory"

function TransactionDetailed(props:{data:{name: string, Date: Date, Value: number, Description: string, Category: string}}) {

    
    return (
        <div id="transactionDetailed">
            <TransactionCreateName editable={1} name={props.data.name}/>
            <TransactionCreateValue/>
            <TransactionCreateDescription/>
            <TransactionCreateCategory categoryType={1}/>
            <TransactionCreateDate/>
        </div>
    )
}

export default TransactionDetailed