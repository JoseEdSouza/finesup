import { Link } from "react-router-dom";
import "./NavBarHome.css";
import { useState } from "react";

function NavBarHome(){
    const [isRouteNav, setRouteNav] = useState("Home")

    const setHomeRouteNav = () =>{
        setRouteNav("Home")
    }

    const setCategoriesRouteNav = () =>{
        setRouteNav("Categorias")
    }

    const setCalculatorsRouteNav = () =>{
        setRouteNav("Calculadoras")
    }
    
    return(
        <nav className="NavBar">
            <img src="./icon-logo.png" id="homeLogo"/>
            <Link to="/" onClick={setHomeRouteNav}><label id="routeHome">Home</label></Link>
            <Link to="/categories" onClick={setCategoriesRouteNav}><label id="routeCategories" >Categorias</label></Link>
            <Link to="/calculators" onClick={setCalculatorsRouteNav}><label id="routeCalculators">Calculadoras</label></Link>
            <label className="LabelPage"><strong>
                {isRouteNav}
            </strong></label>
        </nav>
    );
}

export default NavBarHome;