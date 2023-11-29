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
import TransactionController from "../../controllers/TransactionController"
import Frequency from "../../utils/Frequency"

function TransactionCreateContainer() {
    const [name, setName] = useState("")
    const [value, setValue] = useState(0)
    const [description, setdescription] = useState("")
    const [cat, setcat] = useState(0)
    const [numbRepeat, setNumbRepeat] = useState(0)
    const [period, setPeriod] = useState<Frequency>(Frequency.MONTHLY)
    const [isRepeat, setRepeat] = useState(false)
    const [date, setdate] = useState("")
    const [infinty, setinfinty] = useState("")

    const [typeTransacttion, setTypeTransacttion] = useState(0)

    const getFactor = (e:Frequency) =>{
        switch (e){
            case Frequency.DAILY: {
                return 1
            }
            case Frequency.WEEKLY: {
                return 7
            }
            case Frequency.MONTHLY: {
                return 30
            }
            case Frequency.BIMONTHLY: {
                return 60
            }
            case Frequency.SEMIANNUAL: {
                return 182
            }
            case Frequency.ANNUAL: {
                return 365
            }
        }
    }

    const calcLimitDate = () => {
        if(infinty === ""){
            const result = new Date(date);
            result.setDate(result.getDate() + numbRepeat * getFactor(period));
            return new Date(result.toISOString().slice(0, 10));
        }
        return new Date("0001-01-01")
    }

    let type = typeTransacttion === 0
    const controllerTransaction = new TransactionController()

    const createTransaction = () => controllerTransaction.add(
        type, isRepeat, name, description, value, new Date(date), cat, 0, 0, calcLimitDate(), period
    )

    return (
        <div id="containerAux" style={{ height: "125vh" }}>
            <div id="transactionCreateconatiner" style={{ height: "117vh" }}>
                <TransactionCreateName setName={setName}/>
                <TransactionCreateValue setValue={setValue}/>
                <TransactionCreateDate setDate={setdate}/>
                <TransactionCreateTime setRepeat={setRepeat} setNumRepeat={setNumbRepeat} setInfinty={setinfinty}/>
                <TransactionCreatePeriod setPeriod={setPeriod}/>
                <DisplayReveneExpense setTypeTransactions={setTypeTransacttion} bottom="59.5" />
                <TransactionCreateDescription setDes={setdescription}/>
                <TransactionCreateCategory categoryType={typeTransacttion} setCat={setcat}/>
                <CreateButtons nameButton="Salvar" backTo="/2/transactionHistory" functionOnCreate={createTransaction}/>
            </div>
        </div>
    )
}

export default TransactionCreateContainer