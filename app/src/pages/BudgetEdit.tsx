import BudgetEditComp from "../components/BudgetEditComp/BudgetEditComp"
import NavBarDefault from "../components/NavBarDefault/NavBarDefault"


function BudgetEdit(){
    return(
        <>
            <NavBarDefault name="Editar Orçamento" backTo="/3/budgetdetail"/>
            <BudgetEditComp/>
        </>
    )
}

export default BudgetEdit