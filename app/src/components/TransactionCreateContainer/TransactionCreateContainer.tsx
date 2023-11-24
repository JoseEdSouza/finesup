import { useState } from "react"
import CreateButtons from "../CreateButtons/CreateButtons"
import DisplayReveneExpense from "../DisplayReveneExpense/DisplayReveneExpense"
import "./TransactionCreateContainer.css"
import TransactionCreateCategory from "../TransactionCreateCategory/TransactionCreateCategory"

function TransactionCreateContainer() {
    const [typeTransacttion, setTypeTransacttion] = useState(0)
    
    return (
        <div id="containerAux">
            <div id="transactionCreateconatiner">
                <DisplayReveneExpense setTypeTransactions={setTypeTransacttion} bottom="61.71"/>
                <TransactionCreateCategory categoryType={typeTransacttion}/>
                <CreateButtons nameButton="Salvar" backTo="/2/transactionHistory"/>
            </div>
        </div>
    )
}

export default TransactionCreateContainer