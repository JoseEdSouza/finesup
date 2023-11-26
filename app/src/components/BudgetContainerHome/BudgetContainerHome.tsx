import { Link } from "react-router-dom";
import "./BudgetContainerHome.css";

function BudgetContainerHome(){
    return(
        <Link to="/3/mybudget">
            <div id="budgetContainer">
                <label id="labelBudget"><strong>Meus orçamentos</strong></label>
            </div>
        </Link>
    );
}

export default BudgetContainerHome;