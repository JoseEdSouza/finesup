import TransactionGroup from "../TransactionGroup/TransactionGroup";
import "./TransactionContainer.css";

function TransactionContainer(){
    return(
        <section className="ContainerOfContainers">
            <TransactionGroup/>
        </section>
    );
}

export default TransactionContainer;