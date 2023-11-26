import { Link } from "react-router-dom"
import "./BudgetDetailComp.css"

function BudgetDetailComp(){
    return(
        <>
            <Link to = "/3/budgetedit">
                <div id="editDiv"></div>
            </Link>
        </>
    )
}

export default BudgetDetailComp