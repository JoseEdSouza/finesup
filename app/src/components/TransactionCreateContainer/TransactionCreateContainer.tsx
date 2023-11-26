import { useState } from "react"
import CreateButtons from "../CreateButtons/CreateButtons"
import DisplayReveneExpense from "../DisplayReveneExpense/DisplayReveneExpense"
import "./TransactionCreateContainer.css"
import TransactionCreateCategory from "../TransactionCreateCategory/TransactionCreateCategory"
import TransactionCreateDescription from "../TransactionCreateDescription/TransactionCreateDescription"
import TransactionCreateName from "../TransactionCreateName/TransactionCreateName"
import TransactionCreateDate from "../TransactionCreateDate/TransactionCreateDate"
import TransactionCreateValue from "../TransactionCreateValue/TransactionCreateValue"
import TransactionCreatePeriod from "../TransactionCreatePeriod/TransactionCreatePeriod"
import TransactionCreateTime from "../TransactionCreateRepeat/TransactionCreateRepeat"
import TransactionCreatePortion from "../TransactionCreatePortion/TransactionCreatePortion"

function TransactionCreateContainer() {
    const [typeTransacttion, setTypeTransacttion] = useState(0)
    const [valueTransaction, setValueTransaction] = useState(0)

    return (
        <div id="containerAux" style={typeTransacttion === 1 ? { height: "141.89vh" } : { height: "125vh" }}>
            <div id="transactionCreateconatiner" style={typeTransacttion === 1 ? { height: "129.58vh" } : { height: "117vh" }}>
                <TransactionCreateName />
                <TransactionCreateValue handleValue={setValueTransaction}/>
                <TransactionCreateDate />
                <TransactionCreateTime />
                {typeTransacttion === 1 ?
                    <TransactionCreatePortion transactionValue={valueTransaction}/>
                    : <></>}
                <TransactionCreatePeriod />
                <DisplayReveneExpense setTypeTransactions={setTypeTransacttion} bottom="59.5" />
                <TransactionCreateDescription />
                <TransactionCreateCategory categoryType={typeTransacttion} />
                <CreateButtons nameButton="Salvar" backTo="/2/transactionHistory" />
            </div>
        </div>
    )
}

export default TransactionCreateContainer