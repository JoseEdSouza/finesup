import MyBudgetComp from "../components/MyBudgetComp/MyBudgetComp";
import NavBarDefault from "../components/NavBarDefault/NavBarDefault";

function MyBudget(){
    return(
        <>
            <MyBudgetComp/>
            <NavBarDefault name="Meus Orçamentos" backTo="0"/>
        </>
    )
}

export default MyBudget