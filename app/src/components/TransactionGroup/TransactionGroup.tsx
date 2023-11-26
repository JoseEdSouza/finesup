import Transaction from "../Transaction/Transaction";
import "./TransactionGroup.css";

function TransactionGroup(){

    return(
        <section className="TransactionGroupContainer">
            <label className="LabelTransactionDate">Hoje, 04</label>
            <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
        </section>
    );
}

export default TransactionGroup;