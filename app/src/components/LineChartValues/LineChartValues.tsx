import "./LineChartValues.css"
import {BsArrowUpCircleFill, BsArrowDownCircleFill} from 'react-icons/bs';

function LineChartValues() {
    return (
        <div id="lineChartValues">
            <BsArrowUpCircleFill id="up"/>
            <strong>
                <label id="labelUp">Receitas</label>
                <label id="upValue">+000,00</label>
            </strong>
            <BsArrowDownCircleFill id="down"/>
            <strong>
                <label id="labelDown">Despesas</label>
                <label id="downValue">-000,00</label>
            </strong>
        </div>
    )
}

export default LineChartValues