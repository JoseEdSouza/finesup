import "./CalculatorResult.css";

function CalculatorResult(props:{total:number, invest:number, tax:number}) {
    return (
        <div id="containerResults">
            <label id="labelResult"><strong>Resultado</strong></label>
            <div id="valueTotal">
                <label id="labelValueTotal"><strong>Valor Total</strong></label>
                <label id="valueTo"><strong>R$ {props.total}</strong></label>
            </div>
            <div id="valueInvest">
                <label id="labelValueInvest"><strong>Total Investido</strong></label>
                <label id="valueI"><strong>R$ {props.invest}</strong></label>
            </div>
            <div id="valueTax">
                <label id="labelValueTax"><strong>Total em juros</strong></label>
                <label id="valueT"><strong>R$ {props.tax}</strong></label>
            </div>
        </div>
    )
}

export default CalculatorResult;
