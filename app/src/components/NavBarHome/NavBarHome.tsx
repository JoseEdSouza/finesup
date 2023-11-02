import { Link } from "react-router-dom";
import "./NavBarHome.css";
import { useState } from "react";
import BackIcon from "../BackIcon/BackIcon";

function NavBarHome(){
    const [isRouteNav, setRouteNav] = useState(0)

    const setHomeRouteNav = () =>{
        setRouteNav(0)
    }

    const setCategoriesRouteNav = () =>{
        setRouteNav(1)
    }

    const setCalculatorsRouteNav = () =>{
        setRouteNav(2)
    }
    
    return(
        <nav className="NavBar">
            <BackIcon/>
            <Link to="/" onClick={setHomeRouteNav}><label id="routeHome">Home</label></Link>
            <Link to="/categories" onClick={setCategoriesRouteNav}><label id="routeCategories" >Categorias</label></Link>
            <Link to="/calculators" onClick={setCalculatorsRouteNav}><label id="routeCalculators">Calculadoras</label></Link>
            <label className="LabelPage"><strong>
                {isRouteNav === 0 ? "Home" : isRouteNav === 1 ? "Categories" : isRouteNav === 2 ? "Calculadoras" : ""}
            </strong></label>
        </nav>
    );
}

export default NavBarHome;