import "./BudgetButtons.css"
import { Link } from "react-router-dom"

function BudgetButtons(props:{nameButton:string}){
    return(
        <div id="budbuttons">
            <button id="createButton">{props.nameButton}</button>
            <Link to="/3" id="linkToCRUDB"><label id="cancelButtonB">Cancelar</label></Link>
        </div>
    )
}

export default BudgetButtons