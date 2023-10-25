import "./RevenueExpense.css";
import {BsArrowUpCircleFill, BsArrowDownCircleFill} from 'react-icons/bs';

function RevenueExpense(){
    return(
        <div className="RE">
            <BsArrowUpCircleFill id="Uarrow"/>
            <strong>
                <label id="LabelR">Receitas</label><br/>
                <label id="LabelValueR">+0,00</label>
            </strong>
            <BsArrowDownCircleFill id="Darrow"/>
            <strong>
                <label id="LabelE">Despesas</label><br/>
                <label id="LabelValueE">-0,00</label>
            </strong>
        </div>
    );
}

export default RevenueExpense;