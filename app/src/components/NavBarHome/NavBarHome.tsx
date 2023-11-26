import { Link } from "react-router-dom";
import "./NavBarHome.css";
import { useState } from "react";

function NavBarHome(){
    const [isRouteNav, setRouteNav] = useState("Home")
    const [underlineNav, setUnderlineNav] = useState({
        home: "underline",
        categories: "none",
        calculators: "none",
        user: "none"
    })

    const setHomeRouteNav = () =>{
        setRouteNav("Home")
        setUnderlineNav({
            home: "underline",
            categories: "none",
            calculators: "none",
            user: "none"
        })
    }

    const setCategoriesRouteNav = () =>{
        setRouteNav("Categorias")
        setUnderlineNav({
            home: "none",
            categories: "underline",
            calculators: "none",
            user: "none"
        })
    }

    const setCalculatorsRouteNav = () =>{
        setRouteNav("Calculadoras")
        setUnderlineNav({
            home: "none",
            categories: "none",
            calculators: "underline",
            user: "none"
        })
    }

    const setUserRouteNav = () =>{
        setRouteNav("Usuário")
        setUnderlineNav({
            home: "none",
            categories: "none",
            calculators: "none",
            user: "underline"
        })
    }
    
    return(
        <nav className="NavBar">
            <img src="/icon-logo.png" id="homeLogo"/>
            <Link to="/home" onClick={setHomeRouteNav} ><label id="routeHome" style={{textDecorationLine: underlineNav.home}}>Home</label></Link>
            <Link to="/categories" onClick={setCategoriesRouteNav}><label id="routeCategories" style={{textDecorationLine: underlineNav.categories}}>Categorias</label></Link>
            <Link to="/calculators" onClick={setCalculatorsRouteNav}><label id="routeCalculators" style={{textDecorationLine: underlineNav.calculators}}>Calculadoras</label></Link>
            <Link to="/user" onClick={setUserRouteNav}><img src="./icon_u.svg" id="routeUser" style={{textDecorationLine: underlineNav.user}}/></Link>
                                                        
            <label className="LabelPage"><strong>
                {isRouteNav}
            </strong></label>
        </nav>
    );
}

export default NavBarHome;