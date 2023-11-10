import "./BoxDetails.css";

function BoxDetails(props:{ valueMax:Number}) {
    return (
        <div id="detailsContainer">
            <label id="boxValueDetail"><strong>Meta:</strong><br />R$ {(props.valueMax).toFixed(2)}</label>
            <label id="boxDescriptionDetails"><strong>Discrição:</strong></label>
            <textarea id="boxDescriptionDetailsText" spellCheck="false"></textarea>
            <div id="boxMoneyInputGroup">
                <label id="Rs"><strong>R$: </strong></label>
                <textarea id="moneyText" cols={1} rows={1} spellCheck="false"></textarea>
            </div>
            <div id="GroupButtonsDetails">
                <button id="drawButton">Sacar</button>
                <button id="depositButton">Depositar</button>
            </div>
        </div>
    )
}

export default BoxDetails