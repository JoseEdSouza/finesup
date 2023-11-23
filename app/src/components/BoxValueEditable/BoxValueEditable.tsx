import { ChangeEvent, useState } from "react"
import "./BoxValueEditable.css"

function BoxValueEditable(props:{valueMax:number}){
    const [valueBox, setValueBox] = useState<number>(props.valueMax)

    const handleValueBox = (e:ChangeEvent<HTMLInputElement>) =>{
        setValueBox(+ e.target.value)
    }

    return (
        <div id="boxValueEditable">
            <label id="boxLabelValue"><strong>Meta:</strong></label>
            <input type="number" id="boxValueInputEditable" value={valueBox} onChange={handleValueBox}/>
        </div>
    )
}

export default BoxValueEditable