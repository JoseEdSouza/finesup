import HomeRoute from "../Routes/HomeRoute";
import BoxContainerHome from "../components/BoxContainerHome/BoxContainerHome";
import BudgetContainerHome from "../components/BudgetContainerHome/BudgetContainerHome";
import NavBar from "../components/NavBar/NavBar";
import TransactionContainerHome from "../components/TransactionContainerHome/TransactionContainerHome";

function Home(){
    return(
        <>
            <NavBar name="Home"/>
            <HomeRoute/>
        </>
    );
}

export default Home;