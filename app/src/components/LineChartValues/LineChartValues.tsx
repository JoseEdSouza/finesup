import "./LineChartValues.css"
import {BsArrowUpCircleFill, BsArrowDownCircleFill} from 'react-icons/bs';

function LineChartValues(props:{valuesTransaction:{revenue:number, expense:number}}) {
    return (
        <div id="lineChartValues">
            <BsArrowUpCircleFill id="up"/>
            <strong>
                <label id="labelUp">Receitas</label>
                <label id="upValue">+{(props.valuesTransaction.revenue).toFixed(2)}</label>
            </strong>
            <BsArrowDownCircleFill id="down"/>
            <strong>
                <label id="labelDown">Despesas</label>
                <label id="downValue">-{(props.valuesTransaction.expense).toFixed(2)}</label>
            </strong>
        </div>
    )
}

export default LineChartValues