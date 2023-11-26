import "./AddButtonBudget.css"
import { Link } from "react-router-dom"

function AddButtonBudget (){
    return(
        <Link to="/3/addbudget">
            <button id="plusB">
                <img src="/plus_icon.svg" id="iconPlus"/>
            </button>
        </Link>
    )
}

export default AddButtonBudget