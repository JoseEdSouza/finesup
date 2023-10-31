import { useState } from "react";
import "./HomeRoute.css";
import BoxContainerHome from "../../components/BoxContainerHome/BoxContainerHome";
import BudgetContainerHome from "../../components/BudgetContainerHome/BudgetContainerHome";
import TransactionContainerHome from "../../components/TransactionContainerHome/TransactionContainerHome";
import CalculatorsSelector from "../../components/CalculatorsSelector/CalculatorsSelector";
import RenderCategories from "../RenderCategories/RenderCategories";
import NavBar from "../../components/NavBar/NavBar";

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
            <NavBar name={isRoute === 0 ? "Home" : isRoute === 1 ? "Categorias" : isRoute === 2 ? "Calculadoras" : ""}/>
            <label id="routeHome" onClick={setHomeRoute}>Home</label>
            <label id="routeCalculators" onClick={setCalculatorsRoute}>Calculadoras</label>
            <label id="routeCategories" onClick={setCategoriesRoute}>Categorias</label>
            
            {isRoute === 0 ? <><BoxContainerHome/><BudgetContainerHome/><TransactionContainerHome/></> : isRoute=== 1 ? <RenderCategories/> : isRoute === 2 ? <CalculatorsSelector/> : <></>}
        </>
    );
}

export default HomeRoute;


