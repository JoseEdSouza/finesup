import { Link } from "react-router-dom";
import TransactionButton from "../TransactionButton/TransactionButton";
import "./TransactionContainerHome.css";
import GraphicsButton from "../GraphicsButton/GraphicsButton";
import RevenueExpense from "../RevenueExpense/RevenueExpense";

function TransactionContainerHome() {
    return (
        <div id="transactionContainer">
            <strong id="labelBalanceHome">saldo</strong>
            <label id="labelValueBalanceHome">R$ 320000.00</label>
            <div id="RevenueExpenseHome">
                <RevenueExpense height="6" width="50" revenueValue={3889.55} expenseValue={13199.00} />
            </div>
            <Link to="/2/transactionHistory" id="linkTransactionHistory"><TransactionButton /></Link>
            <Link to="/2/graphics" id="LinkGraphics"><GraphicsButton /></Link>
        </div>
    );
}

export default TransactionContainerHome;