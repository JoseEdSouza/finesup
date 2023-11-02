import { Link } from "react-router-dom";
import "./CalculatorsSelector.css"

function CalculatorsSelector(){

    return(
        <div id="containerOptions">
            <div id="simpleContainer">
                <label htmlFor="" id="labelSimple"><strong>Calculadora Juros Simples</strong></label>
                <Link className="Link" to="/calculators/1"><button id="buttonSimple">Calcular</button></Link>
            </div>
            <div id="compoundContainer">
                <label htmlFor="" id="labelCompound"><strong>Calculadora Juros Compostos</strong></label>
                <Link className="Link" to="/calculators/2"><button id="buttonCompound">Calcular</button></Link>
            </div>
        </div>
    );
}
export default CalculatorsSelector;