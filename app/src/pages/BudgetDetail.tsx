import BudgetDetailComp from "../components/BudgetDetailComp/BudgetDetailComp"
import NavBarDefault from "../components/NavBarDefault/NavBarDefault"


function BudgetDetail(){
    return(
        <>
            <BudgetDetailComp/>
            <NavBarDefault name="Orçamento da categoria" backTo="3"/>
        </>
    )
}

export default BudgetDetail