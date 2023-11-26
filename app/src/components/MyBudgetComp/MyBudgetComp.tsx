import AddButtonBudget from "../AddButton/AddButtonBudget"
import DivCategoriesBud from "../DivCategoriesBud/DivCategoriesBud"
import GraphicsMyBudgets from "../GraphicsMyBudgets/GraphicsMyBudgets"
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
            <GraphicsMyBudgets GraphicValues={[1, 2]}/>
        </>
    )
}

export default MyBudgetComp