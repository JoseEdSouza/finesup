import { useState } from "react";
import "./HomeRoute.css";
import BoxContainerHome from "../components/BoxContainerHome/BoxContainerHome";
import BudgetContainerHome from "../components/BudgetContainerHome/BudgetContainerHome";
import TransactionContainerHome from "../components/TransactionContainerHome/TransactionContainerHome";
import CalculatorsSelector from "../components/CalculatorsSelector/CalculatorsSelector";

function HomeRoute() {
    const[isRoute, setRoute] = useState(0);

    const setHomeRoute = () => {
        setRoute(0)
    }

    const setCategoriesRoute = () => {
        setRoute(1)
    }

    const setCalculatorsRoute = () => {
        setRoute(2)
    }
    
    return (
        <>
            <label id="routeCalculators" onClick={setCalculatorsRoute}>Calculadoras</label>
            <label id="routeCategories" onClick={setCategoriesRoute}>Categorias</label>
            {isRoute === 0 ? <><BoxContainerHome/><BudgetContainerHome/><TransactionContainerHome/></> : <CalculatorsSelector/>}
        </>
    );
}

export default HomeRoute;


