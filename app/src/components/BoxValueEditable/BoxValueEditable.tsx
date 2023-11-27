import { ChangeEvent, useState } from "react"
import "./BoxValueEditable.css"

function BoxValueEditable(props: { valueMax: number, setValue: (value: number) => void }) {
    const [valueBox, setValueBox] = useState<number>(props.valueMax)

    const handleValueBox = (e: ChangeEvent<HTMLInputElement>) => {
        setValueBox(+ e.target.value)
        props.setValue(valueBox)
    }

    return (
        <div id="boxValueEditable">
            <label id="boxLabelValue"><strong>Meta:</strong></label>
            <input type="number" id="boxValueInputEditable" value={props.valueMax} onChange={handleValueBox} />
        </div>
    )
}

export default BoxValueEditable