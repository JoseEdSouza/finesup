import Balance from "../components/Balance/Balance";
import Buttons from "../components/Buttons/Buttons";
import NavBar from "../components/NavBar/NavBar";
import Revenue_expense from "../components/Revenue_expense/Revenue_expense";
import TransactionContainer from "../components/TransactionContainer/TransactionContainer";
import "./TransactionHistory.css";

function TransactionHistory(){
    return(
        <>
            <NavBar name="Histórico de Transações"/>
            <div id="valueContainer">
                <Balance/>
                <Revenue_expense/>
            </div>
            <Buttons/>
            <TransactionContainer/>
        </>
    );
}

export default TransactionHistory;