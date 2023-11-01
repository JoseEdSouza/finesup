import CalculatorSelectCompound from "../components/CalculatorSelectorCompound/CalculatorSelectorCompound";
import NavBar from "../components/NavBar/NavBar";

function CalculatorCompound(){
    return (
        <>
            <NavBar name="Calculadora de Juros Composto"/>
            <CalculatorSelectCompound/>
        </>
    );
}

export default CalculatorCompound;