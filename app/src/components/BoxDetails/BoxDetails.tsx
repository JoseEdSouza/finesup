import { ChangeEvent, useState } from "react";
import "./BoxDetails.css";

function BoxDetails(props:{ valueMax:Number, onValueBox: (prevValue:number) => number,currentValue:number}) {
    
    const [moneyValue, setMoneyValue] = useState(0)

    const handleOnChangeMoney = (e:ChangeEvent<HTMLInputElement>) =>{
        setMoneyValue(+ e.target.value)
    }

    const handleClickDraw = () =>{
        props.onValueBox(props.currentValue - moneyValue)
    }

    const handleClickDeposit = () =>{
        props.onValueBox(props.currentValue + moneyValue)
    }

    return (
        <div id="detailsContainer">
            <label id="boxValueDetail"><strong>Meta:</strong><br />R$ {(props.valueMax).toFixed(2)}</label>
            <label id="boxDescriptionDetails"><strong>Descrição:</strong></label>
            <textarea id="boxDescriptionDetailsText" spellCheck="false"></textarea>

			<div id="boxMoneyInputGroup">
				<label id="Rs">
					<strong>R$: </strong>
				</label>
				<input id="moneyInput" type="number" onChange={handleOnChangeMoney}></input>
			</div>

			<div id="GroupButtonsDetails">
				<button id="drawButton" onClick={handleClickDraw}>
					Sacar
				</button>
				<button id="depositButton" onClick={handleClickDeposit}>
					Depositar
				</button>
			</div>
		</div>
	);
}

export default BoxDetails;
