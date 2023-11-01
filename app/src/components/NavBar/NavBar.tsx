import { ReactElement } from "react";
import "./NavBar.css";

function NavBar(props:{name:string}){
    return(
        <nav className="NavBar">
            <label className="LabelPage">{props.name}</label>
        </nav>
    );
}

export default NavBar;