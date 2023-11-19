import AddButtonBudget from "../AddButton/AddButtonBudget"
import DivCategoriesBud from "../DivCategoriesBud/DivCategoriesBud"
import TopicMyBudget from "../TopicMyBudget/TopicMyBudget"
import "./MyBudgetComp.css"

function MyBudgetComp(){
    return(
        <>
            <AddButtonBudget/>
            <TopicMyBudget/>
            <div id="divTitle">
                <label id="totalBud"><strong>Orçamento total</strong></label>
            </div>
            <DivCategoriesBud/>
        </>
    )
}

export default MyBudgetComp