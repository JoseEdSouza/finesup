import "./NavBarUser.css"
import { Link, useNavigate } from "react-router-dom"
import BackIcon from "../BackIcon/BackIcon"
import UserController from "../../controllers/UserController"

function NavBarUser(props:{name:string, backTo:string}){
    const navigate = useNavigate()
    const logout = () =>{
        UserController.logout()
        navigate("/login", {replace:true})
    }

    return(
        <div id="navBarUser">
            <Link to={props.backTo === "1" ? "/calculators" : props.backTo === "2" ? "/1" : props.backTo === "3" ? "/3/mybudget" : props.backTo === "4" ? "/2/transactionHistory" : props.backTo === "5" ? "/3/budgetdetail" : "/home"} id="linkBackIcon"><BackIcon/></Link>
            <label id="labelPageUser"><strong>{props.name}</strong></label>
            <button id="outButton" onClick={logout}>sair</button>
        </div>
    )
}

export default NavBarUser