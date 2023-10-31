import { useState } from "react";
import "./CalculatorsSelector.css"
import CalculatorSelectorSimple from "../CalculatorSelectorSimple/CalculatorSelectorSimple";
import CalculatorSimple from "../../pages/CalculatorSimple";

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
                    <label htmlFor="" id="labelSimple" onClick={setSimpleCalculator}><strong>Calculadora Juros Simples</strong></label>
                    <button id="buttonSimple">Calcular</button>
                </div>
                <div id="compoundContainer">
                    <label htmlFor="" id="labelCompound"><strong>Calculadora Juros Compostos</strong></label>
                    <button id="buttonCompound">Calcular</button>
                </div>
            </div>
            : isRouteCalculator === 1 ? <CalculatorSimple/> : <></>}
        </>
    );
}
export default CalculatorsSelector;