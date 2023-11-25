import { useState } from "react"
import "./TransactionCreateRepeat.css"

function TransactionCreateRepeat() {
    const [value, setValue] = useState(false)

    return (
        <div id="transactionCreateRepeat">
            <label id="transactionRepeatLabel"><strong>Repetir</strong></label>
            {value === false ?
                <input type="number" id="transactionRepeatInput" placeholder="0 ou mais vezes" />
                : <input type="text" id="transactionRepeatInput" value={"Infinitamente"} />
            }
            <div id="infinitlyContainer">
                <input type="checkbox" id="checkboxInfinitely" onChange={(e) => setValue(e.target.checked)} />
                <label id="labelInfinitely">Repetir Infinitamente</label>
            </div>
        </div>
    )
}

export default TransactionCreateRepeat