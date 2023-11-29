import "./Budget.css"
import { Link } from "react-router-dom"
import ProgressBar from "../ProgressBar/ProgressBar"
import GraphicsDivBudget from "../GraphicsDivBudget/GraphicsDivBudget";

function Budget(props: { name: string; valueCurrent: number; valueMax: number }){
    return(
        <Link to="/3/budgetdetail">
            <div id="div1">
            <label id="label1"><strong>{props.name}</strong></label>
                <img src="/icon_edit.svg" className="EditIcon"/>
                <img src="/icon_delete.svg" className="DeleteIcon"/>   
                <img src="/icon_check.svg" className="CheckIcon"/>
                <GraphicsDivBudget GraphicValues={[80.3, 19.7]}/>
                <div className="DivBarB">
                    <ProgressBar
                        valueCurrent={props.valueCurrent}
                        valueMax={props.valueMax}
                        progress={0}
                        width={21.875}
                        height={2.83}
                        top={13.52}
                        backgroundStyle="white"
                        labelStyle=""
                    />
                </div>
            </div>
        </Link>
    )
}

export default Budget