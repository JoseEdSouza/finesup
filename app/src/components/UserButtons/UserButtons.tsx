import "./UserButtons.css"
import { Link } from "react-router-dom"

function UserButtons(props:{nameButton:string, backTo:string}){
    return(
        <div id="divUserButtons">
            <Link to={props.backTo}><button id="deleteButton">Excluir Conta</button></Link>
            <Link to={props.backTo}><button id="createButtonU">{props.nameButton}</button></Link>
            <Link to="/home" id="linkToCancel"><label id="cancelButtonU">Descartar alterações</label></Link>
        </div>
    )
}

export default UserButtons