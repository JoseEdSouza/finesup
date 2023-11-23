import { Link } from "react-router-dom";
import "./NavBarHome.css";
import { useState } from "react";

function NavBarHome(){
    const [isRouteNav, setRouteNav] = useState("Home")
    const [underlineNav, setUnderlineNav] = useState({
        home: "underline",
        categories: "none",
        calculators: "none"
    })

    const setHomeRouteNav = () =>{
        setRouteNav("Home")
        setUnderlineNav({
            home: "underline",
            categories: "none",
            calculators: "none"
        })
    }

    const setCategoriesRouteNav = () =>{
        setRouteNav("Categorias")
        setUnderlineNav({
            home: "none",
            categories: "underline",
            calculators: "none"
        })
    }

    const setCalculatorsRouteNav = () =>{
        setRouteNav("Calculadoras")
        setUnderlineNav({
            home: "none",
            categories: "none",
            calculators: "underline"
        })
    }
    
    return(
        <nav className="NavBar">
            <img src="./icon-logo.png" id="homeLogo"/>
            <Link to="/" onClick={setHomeRouteNav}><label id="routeHome" style={{textDecorationLine: underlineNav.home}}>Home</label></Link>
            <Link to="/categories" onClick={setCategoriesRouteNav}><label id="routeCategories" style={{textDecorationLine: underlineNav.categories}}>Categorias</label></Link>
            <Link to="/calculators" onClick={setCalculatorsRouteNav}><label id="routeCalculators" style={{textDecorationLine: underlineNav.calculators}}>Calculadoras</label></Link>
            <label className="LabelPage"><strong>
                {isRouteNav}
            </strong></label>
        </nav>
    );
}

export default NavBarHome;