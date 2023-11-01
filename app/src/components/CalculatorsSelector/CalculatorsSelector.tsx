import { useState } from "react";
import "./CalculatorsSelector.css"
import CalculatorSimple from "../../pages/CalculatorSimple";
import CalculatorCompound from "../../pages/CalculatorCompound";

function CalculatorsSelector(){
    const [isRouteCalculator, setRouteCalculator] = useState(0)

    const setSimpleCalculator = () =>{
        setRouteCalculator(1)
    }

    const setCompoundCalculator = () =>{
        setRouteCalculator(2)
    }

    return(
        <>
            {isRouteCalculator === 0 ?
            <div id="containerOptions">
                <div id="simpleContainer">
                    <label htmlFor="" id="labelSimple"><strong>Calculadora Juros Simples</strong></label>
                    <button id="buttonSimple" onClick={setSimpleCalculator}>Calcular</button>
                </div>
                <div id="compoundContainer">
                    <label htmlFor="" id="labelCompound"><strong>Calculadora Juros Compostos</strong></label>
                    <button id="buttonCompound" onClick={setCompoundCalculator}>Calcular</button>
                </div>
            </div>
            : isRouteCalculator === 1 ? <CalculatorSimple/> : isRouteCalculator === 2 ? <CalculatorCompound/> : ""}
        </>
    );
}
export default CalculatorsSelector;