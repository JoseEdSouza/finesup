import { useState } from "react"
import CreateButtons from "../CreateButtons/CreateButtons"
import DisplayReveneExpense from "../DisplayReveneExpense/DisplayReveneExpense"
import "./TransactionCreateContainer.css"
import TransactionCreateCategory from "../TransactionCreateCategory/TransactionCreateCategory"
import TransactionCreateDescription from "../TransactionCreateDescription/TransactionCreateDescription"
import TransactionCreateName from "../TransactionCreateName/TransactionCreateName"

function TransactionCreateContainer() {
    const [typeTransacttion, setTypeTransacttion] = useState(0)
    
    return (
        <div id="containerAux">
            <div id="transactionCreateconatiner">
                <TransactionCreateName/>
                <DisplayReveneExpense setTypeTransactions={setTypeTransacttion} bottom="61.71"/>
                <TransactionCreateDescription/>
                <TransactionCreateCategory categoryType={typeTransacttion}/>
                <CreateButtons nameButton="Salvar" backTo="/2/transactionHistory"/>
            </div>
        </div>
    )
}

export default TransactionCreateContainer