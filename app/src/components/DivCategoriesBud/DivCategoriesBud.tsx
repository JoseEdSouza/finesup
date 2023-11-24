import "./DivCategoriesBud.css"
import { Link } from "react-router-dom"

function DivCategoriesBud(){
    return(
        <Link to="/3/budgetdetail">
            <div id="div1">
                <label id="label1"><strong>Roupas</strong></label>
            </div>
            <div id="div2">
                <label id="label2"><strong>Alimentação</strong></label>
            </div>
            <div id="div3">
                <label id="label3"><strong>Lazer</strong></label>
            </div>
        </Link>
    )
}

export default DivCategoriesBud