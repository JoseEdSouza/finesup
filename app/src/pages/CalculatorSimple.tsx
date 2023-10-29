import NavBar from "../components/NavBar/NavBar";
import CalculatorSelectorSimple from "../components/CalculatorSelectorSimple/CalculatorSelectorSimple";

function CalculatorsSelector(){
    return(
        <>
            <NavBar name="Calculadora de Juros Simples"/>
            <CalculatorSelectorSimple/>
        </>
    );
}

export default CalculatorsSelector;