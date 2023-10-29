import "./CalculatorSelectorSimple.css"

function CalculatorSelectorSimple(){
    return(
        <>
            <div id="container">
                <label htmlFor="" id="labelInitial"><strong>Valor Inicial</strong></label>
                <input type="number" id="numberInput"></input>
                <label htmlFor="" id="labelFees"><strong>Taxa de Juros</strong></label>
                <input type="number" id="feesInput"></input>
                <label htmlFor="" id="labelPeriod"><strong>Periodo em</strong></label>
                <input type="number" id="anoInput"></input>
                <select id="anosSelect">
                    <option value={"1"}>1 ano</option>
                    <option value={"2"}>2 anos</option>
                    <option value={"3"}>3 anos</option>
                    <option value={"4"}>4 anos</option>
                    <option value={"5"}>5 anos</option>
                </select>
                <label htmlFor="" id="labelClear"></label>
                <button id="buttonCalculate">Calcular</button>
            </div>
        </>
    );
}

export default CalculatorSelectorSimple;