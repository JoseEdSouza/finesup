import "./AddBudgetComp.css"    
import BudgetButtons from "../BudgetButtons/BudgetButtons";
import BudgetInputs from "../BudgetInputs/BudgetInputs";
import BudgetLabels from "../BudgetLabels/BudgetLabels";

function AddBudgetComp(){
    return(
        <div id="addbudget">
            <BudgetButtons nameButton="Salvar"/>
            <BudgetLabels/>
            <BudgetInputs/>
        </div>
    );
}

export default AddBudgetComp