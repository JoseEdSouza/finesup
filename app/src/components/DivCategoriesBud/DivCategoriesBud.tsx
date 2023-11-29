import GraphicsDivBudget from "../GraphicsDivBudget/GraphicsDivBudget"
import "./DivCategoriesBud.css"
import { Link } from "react-router-dom"
import ProgressBar from "../ProgressBar/ProgressBar"

function DivCategoriesBud(props: { name: string; valueCurrent: number; valueMax: number }){
    return(
        <Link to="/3/budgetdetail">
            <div id="div1">
                <label id="label1"><strong>Roupas</strong></label>
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
            <div id="div2">
                <label id="label2"><strong>Alimentação</strong></label>
                <img src="/icon_edit.svg" className="EditIcon"/>
                <img src="/icon_delete.svg" className="DeleteIcon"/>
                <img src="/icon_check.svg" className="CheckIcon"/>
                <GraphicsDivBudget GraphicValues={[63.7, 36.3]}/>
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
            <div id="div3">
                <label id="label3"><strong>Lazer</strong></label>
                <img src="/icon_edit.svg" className="EditIcon"/>
                <img src="/icon_delete.svg" className="DeleteIcon"/>
                <img src="/icon_check.svg" className="CheckIcon"/>
                <GraphicsDivBudget GraphicValues={[21.7, 78.3]}/>
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

export default DivCategoriesBud