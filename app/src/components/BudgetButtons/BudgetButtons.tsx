import "./BudgetButtons.css"
import { Link } from "react-router-dom"

function BudgetButtons(props:{nameButton:string}){
    return(
        <div id="budbuttons">
            <button id="createButton">{props.nameButton}</button>
            <Link to="/" id="linkToCRUD"><label id="cancelButton">Cancelar</label></Link>
        </div>
    )
}

export default BudgetButtons