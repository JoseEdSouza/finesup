import "./Buttons.css";
import {Link, useNavigate} from "react-router-dom"

function Buttons(){
    const navigate = useNavigate()

    return (
        <div className="Buttons">
            <button id="Fixed" onClick={() => navigate("/2/transactionHistory/fixeds", {replace:true})}>Lançamentos fixos</button>
            <button id="History" onClick={() => navigate("/2/transactionHistory/History", {replace: true})}>Vizualizar Histórico</button>
            <Link to="/2/transactionHistory/addTransaction" id="Add">+</Link>
        </div>
    );
}

export default Buttons;