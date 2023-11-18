import "./AddBudgetComp.css"    
import BudgetButtons from "../BudgetButtons/BudgetButtons";
import BudgetInputs from "../BudgetInputs/BudgetInputs";
import BudgetLabels from "../BudgetLabels/BudgetLabels";

function AddBudgetComp(){
    return(
        <div id="addbudget">
            <BudgetLabels/>
            <BudgetInputs/>
            <BudgetButtons nameButton="Salvar"/>
        </div>
    );
}

export default AddBudgetComp