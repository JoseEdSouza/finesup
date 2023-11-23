import Transaction from "../Transaction/Transaction";
import "./TransactionGroup.css";

function TransactionGroup(){
    return(
        <section className="TransactionGroupContainer">
            <label className="LabelTransactionDate">Hoje, 04</label>
            <Transaction/>
        </section>
    );
}

export default TransactionGroup;