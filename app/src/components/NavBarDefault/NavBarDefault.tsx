import { Link } from "react-router-dom"
import "./NavBarDefault.css"
import BackIcon from "../BackIcon/BackIcon"

const NavBarDefault = (props:{name:string, backTo:string}) => {
    return (
        <div id="navBarDefault">
            <Link to={props.backTo === "1" ? "/calculators" : props.backTo === "2" ? "/1" : props.backTo === "3" ? "/3/mybudget" : props.backTo === "4" ? "/2/transactionHistory" : props.backTo === "5" ? "/3/budgetdetail" : "/"} id="linkBackIcon"><BackIcon/></Link>
            <label id="labelPageDefault"><strong>{props.name}</strong></label>
            <Link to="/" ><label id="routeHomeD">Home</label></Link>
        </div>
    )
}

export default NavBarDefault