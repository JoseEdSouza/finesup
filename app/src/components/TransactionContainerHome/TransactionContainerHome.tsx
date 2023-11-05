import { Link } from "react-router-dom";
import TransactionButton from "../TransactionButton/TransactionButton";
import "./TransactionContainerHome.css";

function TransactionContainerHome(){
    return(
        <div id="transactionContainer">
            <Link to="/2/transactionHistory" id="linkTransactionHistory"><TransactionButton/></Link>
        </div>
    );
}

export default TransactionContainerHome;