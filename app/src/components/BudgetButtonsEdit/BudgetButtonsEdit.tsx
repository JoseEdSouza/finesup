import "./BudgetButtonsEdit.css"
import { Link } from "react-router-dom"

function BudgetButtonsEdit(props:{nameButton:string}){
    return(
        <div id="budbuttonsE">
            <button id="createButton">{props.nameButton}</button>
            <Link to="/3/budgetdetail" id="linkToDetail"><label id="cancelButtonE">Cancelar</label></Link>
        </div>
    )
}

export default BudgetButtonsEdit

