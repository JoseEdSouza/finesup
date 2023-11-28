import { ChangeEvent, useEffect, useState } from "react";
import "./BoxDetails.css";
import { useNavigate } from "react-router-dom";
import BoxController from "../../controllers/BoxController";

function BoxDetails(props: { name:string | undefined, valueMax: Number, description: string, deposit: (value: number) => void, draw: (value: number) => void, currentValue: number, controller:BoxController }) {
	const [moneyValue, setMoneyValue] = useState(0)
	const [isRedirected, setRedirected] = useState(false)
	const navigate = useNavigate()
	
	const handleOnChangeMoney = (e: ChangeEvent<HTMLInputElement>) => {
		setMoneyValue(+ e.target.value)
	}

	const deleteBox = async () =>{
		await props.controller.remove(props.name === undefined ? "" : props.name).then(() => setRedirected(true)).catch((error) => console.log(error))
	}

	const redirected = () =>{
		if(!isRedirected) return
		navigate("/1", {replace: true})
	}
	useEffect(() =>{
		redirected()
	},[isRedirected])

	return (
		<div id="detailsContainer">
			<img src="/icon_delete.svg" style={{position: "absolute", height: "3.5vh", right: "0", margin: "10px", marginRight: "12px", cursor:"pointer"}} onClick={deleteBox}/>
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
