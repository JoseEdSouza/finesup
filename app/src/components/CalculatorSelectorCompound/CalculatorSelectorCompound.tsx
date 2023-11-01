import CalculatorResult from "../CalculatorResult/CalculatorResult";
import NavBar from "../NavBar/NavBar";
import "./CalculatorSelectorCompound.css"

function CalculatorSelectCompound(){
    return(
        <>
            <NavBar name="Calculadora de Juros Composto"/>
            <div id="containerCompound">
                <label htmlFor="" id="labelInitialCompound"><strong>Valor Inicial</strong></label>
                <input type="number" id="numberInputCompound"></input>
                <label htmlFor="" id="labelFeesCompound"><strong>Taxa de Juros</strong></label>
                <input type="number" id="feesInputCompound"></input>
                <label htmlFor="" id="labelPeriodCompound"><strong>Periodo em</strong></label>
                <input type="number" id="periodInputCompound"></input>
                <label htmlFor="" id="labelTaxCompound"><strong>Taxas de Juros</strong></label>
                <input type="number" id="taxInputCompound"></input>
                <select id="anosSelectCompound">
                    <option value={"1"}>anos</option>
                    <option value={"2"}>meses</option>
                    <option value={"3"}>dias</option>
                </select>
                <label htmlFor="" id="labelClearCompound">Limpar</label>
                <button id="buttonCalculateCompound">Calcular</button>
            </div>
        
        </>
    );
}

export default CalculatorSelectCompound;