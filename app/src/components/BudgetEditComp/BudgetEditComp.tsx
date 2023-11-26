import "./BudgetEditComp.css"
import BudgetInputs from "../BudgetInputs/BudgetInputs";
import BudgetLabels from "../BudgetLabels/BudgetLabels";
import BudgetButtonsEdit from "../BudgetButtonsEdit/BudgetButtonsEdit";

function BudgetEditComp(){
    return(
        <div id="divEdit">
            <BudgetLabels/>
            <BudgetInputs/>
            <BudgetButtonsEdit nameButton="Salvar"/>
        </div>
    )
}

export default BudgetEditComp