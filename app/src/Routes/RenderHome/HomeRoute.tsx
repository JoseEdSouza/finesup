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
            <svg onClick={setHomeRoute} id="backIcon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.65 20L24.8 13.85L22 11L13 20L22 29L24.8 26.15L18.65 20ZM20 0C22.7667 0 25.3667 0.525002 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7667 39.475 25.3667 38.425 27.8C37.375 30.2333 35.95 32.35 34.15 34.15C32.35 35.95 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40C17.2333 40 14.6333 39.475 12.2 38.425C9.76667 37.375 7.65 35.95 5.85 34.15C4.05 32.35 2.625 30.2333 1.575 27.8C0.525002 25.3667 0 22.7667 0 20C0 17.2333 0.525002 14.6333 1.575 12.2C2.625 9.76667 4.05 7.65 5.85 5.85C7.65 4.05 9.76667 2.625 12.2 1.575C14.6333 0.525002 17.2333 0 20 0ZM20 4C15.5333 4 11.75 5.55 8.65 8.65C5.55 11.75 4 15.5333 4 20C4 24.4667 5.55 28.25 8.65 31.35C11.75 34.45 15.5333 36 20 36C24.4667 36 28.25 34.45 31.35 31.35C34.45 28.25 36 24.4667 36 20C36 15.5333 34.45 11.75 31.35 8.65C28.25 5.55 24.4667 4 20 4Z"
                    fill="#2E1E43" />
            </svg>
            <label id="routeHome" onClick={setHomeRoute}>Home</label>
            <label id="routeCalculators" onClick={setCalculatorsRoute}>Calculadoras</label>
            <label id="routeCategories" onClick={setCategoriesRoute}>Categorias</label>
            
            {isRoute === 0 ? <><BoxContainerHome/><BudgetContainerHome/><TransactionContainerHome/></> : isRoute=== 1 ? <RenderCategories/> : isRoute === 2 ? <CalculatorsSelector/> : <></>}
        </>
    );
}

export default HomeRoute;

