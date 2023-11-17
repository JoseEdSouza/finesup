import NavBarDefault from "../components/NavBarDefault/NavBarDefault"
import AddBudgetComp from "../components/addBudgetComp/AddBudgetComp"

function AddBudget(){
    return(
        <>
            <NavBarDefault name="Criar Orçamento" backTo="0"/>
            <AddBudgetComp/>
        </>
    )
}

export default AddBudget