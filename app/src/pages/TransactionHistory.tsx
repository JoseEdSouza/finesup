import Balance from "../components/Balance/Balance";
import Buttons from "../components/Buttons/Buttons";
import NavBar from "../components/NavBarHome/NavBarHome";
import RevenueExpense from "../components/RevenueExpense/RevenueExpense";
import TransactionContainer from "../components/TransactionContainer/TransactionContainer";
import "./TransactionHistory.css";

function TransactionHistory(){
    return(
        <>
            <NavBar name="Histórico de Transações"/>
            <div id="valueContainer">
                <Balance/>
                <RevenueExpense/>
            </div>
            <Buttons/>
            <TransactionContainer/>
        </>
    );
}

export default TransactionHistory;