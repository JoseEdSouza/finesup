import Transaction from "../Transaction/Transaction";
import "./TransactionGroup.css";

function TransactionGroup(){
    return(
        <section className="Container">
            <label className="LabelTransactionDate">Hoje, 04</label>
            <Transaction/>
        </section>
    );
}

export default TransactionGroup;