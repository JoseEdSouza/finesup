import { Link } from "react-router-dom";
import TransactionButton from "../TransactionButton/TransactionButton";
import "./TransactionContainerHome.css";
import GraphicsButton from "../GraphicsButton/GraphicsButton";

function TransactionContainerHome(){
    return(
        <div id="transactionContainer">
            <Link to="/2/transactionHistory" id="linkTransactionHistory"><TransactionButton/></Link>
            <Link to="/2/graphics" id="LinkGraphics"><GraphicsButton/></Link>
        </div>
    );
}

export default TransactionContainerHome;