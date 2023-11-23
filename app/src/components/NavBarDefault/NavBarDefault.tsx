import { Link } from "react-router-dom"
import "./NavBarDefault.css"
import BackIcon from "../BackIcon/BackIcon"

const NavBarDefault = (props:{name:string, backTo:string}) => {
    return (
        <div id="navBarDefault">
            <Link to={props.backTo === "1" ? "/calculators" : props.backTo === "2" ? "/1" : "/"} id="linkBackIcon"><BackIcon/></Link>
            <label id="labelPageDefault"><strong>{props.name}</strong></label>
        </div>
    )
}

export default NavBarDefault