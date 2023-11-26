import "./RevenueExpense.css";
import {BsArrowUpCircleFill, BsArrowDownCircleFill} from 'react-icons/bs';

function RevenueExpense(props:{height:string, width:string, revenueValue:number, expenseValue:number}){
    return(
        <div className="RE" style={{height: props.height + "vh", width: props.width + "vh"}}>
            <BsArrowUpCircleFill id="Uarrow"/>
            <strong>
                <label id="LabelR">Receitas</label><br/>
                <label id="LabelValueR">+{props.revenueValue}</label>
            </strong>
            <BsArrowDownCircleFill id="Darrow"/>
            <strong>
                <label id="LabelE">Despesas</label><br/>
                <label id="LabelValueE">-{props.expenseValue}</label>
            </strong>
        </div>
    );
}

export default RevenueExpense;