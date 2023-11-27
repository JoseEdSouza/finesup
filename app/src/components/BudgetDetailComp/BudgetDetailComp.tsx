import { Link } from "react-router-dom"
import "./BudgetDetailComp.css"

function BudgetDetailComp(){
    return(
        <>
            <Link to = "/3/budgetedit">
                <div id="editDiv">
                    <img src="/icon_edit.svg" className="EditBud"/>
                </div>
            </Link>
        </>
    )
}

export default BudgetDetailComp