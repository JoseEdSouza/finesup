import { useState } from "react"
import "./TransactionCreatePortion.css"

function TransactionCreatePortion(props:{transactionValue:number}) {
    const [numberPortions, setNumberPortions] =useState(1)
    
    if(numberPortions === 0){
        setNumberPortions(1)
    }
    
    return (
        <div id="transactionCreatePortion">
            <label id="transactionPortionLabel"><strong>Parcela</strong></label>
            <input type="number" id="transactionPortionInput" placeholder="Número de parcelas" onChange={(e) => setNumberPortions(+ e.target.value)}/>
            <div id="portionValue">
                <label id="labelPortion"><strong>Valor da Parcela</strong></label>
                <label id="labelValuePortion"><strong>R${(props.transactionValue / numberPortions).toFixed(2)}</strong></label>
            </div>
        </div>
    )
}

export default TransactionCreatePortion