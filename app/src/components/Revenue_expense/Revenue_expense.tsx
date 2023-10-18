import "./Revenue_expense.css";
import {BsArrowUpCircleFill, BsArrowDownCircleFill} from 'react-icons/bs';

function Revenue_expense(){
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

export default Revenue_expense;