import { Link } from "react-router-dom"
import "./BudgetDetailComp.css"
import Transaction from "../Transaction/Transaction"

function BudgetDetailComp(){
    return(
        <>
            <div id="editDiv">
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
            </div>

            <div id="editDiv2">
                <Link to = "/3/budgetedit"><img src="/icon_edit.svg" className="EditBud"/> </Link>
            </div>
        </>
    )
}

export default BudgetDetailComp