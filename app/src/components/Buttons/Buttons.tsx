import "./Buttons.css";
import {Link} from "react-router-dom"

function Buttons(){
    return (
        <div className="Buttons">
            <button id="Fixed">Lançamentos fixos</button>
            <button id="History">Vizualizar Histórico</button>
            <Link to="/2/transactionHistory/addTransaction" id="Add">+</Link>
        </div>
    );
}

export default Buttons;