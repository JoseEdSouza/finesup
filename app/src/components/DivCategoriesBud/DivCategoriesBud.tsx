import GraphicsDivBudget from "../GraphicsDivBudget/GraphicsDivBudget"
import "./DivCategoriesBud.css"
import { Link } from "react-router-dom"

function DivCategoriesBud(){
    return(
        <Link to="/3/budgetdetail">
            <div id="div1">
                <label id="label1"><strong>Roupas</strong></label>
                <img src="/icon_edit.svg" className="EditIcon"/>
                <img src="/icon_delete.svg" className="DeleteIcon"/>   
                <img src="/icon_check.svg" className="CheckIcon"/>
                <GraphicsDivBudget GraphicValues={[80.3, 19.7]}/>
            </div>
            <div id="div2">
                <label id="label2"><strong>Alimentação</strong></label>
                <img src="/icon_edit.svg" className="EditIcon"/>
                <img src="/icon_delete.svg" className="DeleteIcon"/>
                <img src="/icon_check.svg" className="CheckIcon"/>
                <GraphicsDivBudget GraphicValues={[63.7, 36.3]}/>
            </div>
            <div id="div3">
                <label id="label3"><strong>Lazer</strong></label>
                <img src="/icon_edit.svg" className="EditIcon"/>
                <img src="/icon_delete.svg" className="DeleteIcon"/>
                <img src="/icon_check.svg" className="CheckIcon"/>
                <GraphicsDivBudget GraphicValues={[21.7, 78.3]}/>
            </div>
        </Link>
    )
}

export default DivCategoriesBud