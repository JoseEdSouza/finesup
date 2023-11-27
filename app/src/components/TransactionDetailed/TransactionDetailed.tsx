import TransactionCreateName from "../TransactionCreateName/TransactionCreateName"
import "./TransactionDetailed.css"
import TransactionCreateDate from "../TransactionCreateDate/TransactionCreateDate"
import TransactionCreateValue from "../TransactionCreateValue/TransactionCreateValue"
import TransactionCreateDescription from "../TransactionCreateDescription/TransactionCreateDescription"
import TransactionCreateCategory from "../TransactionCreateCategory/TransactionCreateCategory"

function TransactionDetailed() {

    
    return (
        <div id="transactionDetailed">
            <TransactionCreateName editable={1} name={"teste"}/>
            <TransactionCreateValue/>
            <TransactionCreateDescription/>
            <TransactionCreateCategory categoryType={1}/>
            <TransactionCreateDate/>
        </div>
    )
}

export default TransactionDetailed