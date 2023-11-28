import AddButtonBudget from "../AddButton/AddButtonBudget"
import DivCategoriesBud from "../DivCategoriesBud/DivCategoriesBud"
import GraphicsMyBudgets from "../GraphicsMyBudgets/GraphicsMyBudgets"
import "./MyBudgetComp.css"

function MyBudgetComp(){
    return(
        <>
            <AddButtonBudget/>
            <div id="divTitle">
                <label id="totalBud"><strong>Orçamento total</strong></label>
            </div>
            <DivCategoriesBud/>
            <GraphicsMyBudgets GraphicValues={[1, 1, 1,1]}/>
        </>
    )
}

export default MyBudgetComp