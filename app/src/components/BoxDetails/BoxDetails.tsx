import { ChangeEvent, useState } from "react";
import "./BoxDetails.css";

function BoxDetails(props: { valueMax: Number, description: string, deposit: (value: number) => void, draw: (value: number) => void, currentValue: number }) {

	const [moneyValue, setMoneyValue] = useState(0)

	const handleOnChangeMoney = (e: ChangeEvent<HTMLInputElement>) => {
		setMoneyValue(+ e.target.value)
	}

	return (
		<div id="detailsContainer">
			<label id="boxValueDetail"><strong>Meta:</strong><br />R$ {(props.valueMax).toFixed(2)}</label>
			<label id="boxDescriptionDetails"><strong>Descrição:</strong></label>
			<textarea id="boxDescriptionDetailsText" spellCheck="false" value={props.description}></textarea>
			<div id="boxMoneyInputGroup">
				<label id="Rs">
					<strong>R$: </strong>
				</label>
				<input id="moneyInput" type="number" onChange={handleOnChangeMoney}></input>
			</div>

			<div id="GroupButtonsDetails">
				<button id="drawButton" onClick={() => props.draw(moneyValue)}>
					Sacar
				</button>
				<button id="depositButton" onClick={() => props.deposit(moneyValue)}>
					Depositar
				</button>
			</div>
		</div>
	);
}

export default BoxDetails;
