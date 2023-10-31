import NavBar from "../NavBar/NavBar";
import "./CalculatorSelectorSimple.css"

function CalculatorSelectorSimple(){
    return(
        <>
        <NavBar name="Calculadora de Juros Simples"/>
            <div id="container">
                <label htmlFor="" id="labelInitial"><strong>Valor Inicial</strong></label>
                <input type="number" id="numberInput"></input>
                <label htmlFor="" id="labelFees"><strong>Taxa de Juros</strong></label>
                <input type="number" id="feesInput"></input>
                <label htmlFor="" id="labelPeriod"><strong>Periodo em</strong></label>
                <input type="number" id="periodInput"></input>
                <select id="anosSelect">
                    <option value={"1"}>anos</option>
                    <option value={"2"}>meses</option>
                    <option value={"3"}>dias</option>
                </select>
                <label htmlFor="" id="labelClear">Limpar</label>
                <button id="buttonCalculate">Calcular</button>
            </div>
        </>
    );
}

export default CalculatorSelectorSimple;