import BackIcon from "../BackIcon/BackIcon"
import { Link } from "react-router-dom"
import "./NavBarDefault.css"

const NavBarDefault = (props:{name:string}) => {
    return (
        <div id="navBarDefault">
            <label id="labelPageDefault"><strong>{props.name}</strong></label>
            <Link to="/calculators"><BackIcon/></Link>
        </div>
    )
}

export default NavBarDefault