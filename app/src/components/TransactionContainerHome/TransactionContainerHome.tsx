import { Link } from "react-router-dom";
import "./TransactionContainerHome.css";
import GraphicsButton from "../GraphicsButton/GraphicsButton";
import RevenueExpense from "../RevenueExpense/RevenueExpense";
import TransactionButton from "../TransactionButton/TransactionButton";

function TransactionContainerHome() {
    return (
        <div id="transactionContainerHome">
            <strong id="labelBalanceHome">saldo</strong>
            <label id="labelValueBalanceHome">R$ 0.00</label>
            <div id="RevenueExpenseHome">
                <RevenueExpense height="6" width="50" revenueValue={0} expenseValue={0.00} />
            </div>
            <Link to="/2/transactionHistory" id="linkTransactionHistory"><TransactionButton/></Link>
            <Link to="/2/graphics" id="LinkGraphics"><GraphicsButton /></Link>
        </div>
    );
}

export default TransactionContainerHome;