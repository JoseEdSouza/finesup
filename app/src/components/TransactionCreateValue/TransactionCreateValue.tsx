import { ChangeEvent, useEffect, useState } from "react"
import "./TransactionCreateValue.css"
import { useNavigate } from "react-router-dom"

function TransactionCreateValue() {
    const navigate = useNavigate()
    const [value, setValue] = useState(0)

    const handleValue = (e:ChangeEvent<HTMLInputElement>) =>{
        setValue(+ e.target.value)
    }

    useEffect(() =>{
        navigate("/2/transactionHistory/addTransaction", {state: {value: value}})
    }, [value])
    
    return (
        <div id="transactionCreateValue">
            <label id="transactionValueLabel"><strong>Valor</strong></label>
            <input type="number" id="transactionValueInput" placeholder="R$" onChange={handleValue}/>
        </div>
    )
}

export default TransactionCreateValue