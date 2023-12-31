import Balance from "../components/Balance/Balance";
import Buttons from "../components/Buttons/Buttons";
import NavBarDefault from "../components/NavBarDefault/NavBarDefault";
import RevenueExpense from "../components/RevenueExpense/RevenueExpense";
import TransactionContainer from "../components/TransactionContainer/TransactionContainer";
import "./TransactionHistory.css";

function TransactionHistory(){
    return(
        <>
            <NavBarDefault name="Histórico de Lançamentos" backTo="0"/>
            <div id="valueContainer">
                <Balance/>
                <RevenueExpense height="11.5" width="64.6" expenseValue={34} revenueValue={200}/>
            </div>
            <Buttons/>
            <TransactionContainer/>
        </>
    );
}

export default TransactionHistory;