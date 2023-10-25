import "./CalculatorsSelector.css"

function CalculatorsSelector(){
    return(
        <div id="container">
            <div id="simpleContainer">
                <label htmlFor="" id="labelSimple"><strong>Calculadora Juros Simples</strong></label>
                <button id="buttonSimple">Calcular</button>
            </div>
            <div id="compoundContainer">
                <label htmlFor="" id="labelCompound"><strong>Calculadora Juros Compostos</strong></label>
                <button id="buttonCompound">Calcular</button>
            </div>
        </div>
    );
}
export default CalculatorsSelector;