import { ChangeEvent } from "react"
import "./BoxValueEditable.css"

function BoxValueEditable(props: { valueMax: number, setValue: (value: number) => void }) {

    const handleValueBox = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(+ e.target.value)
    }

    return (
        <div id="boxValueEditable">
            <label id="boxLabelValue"><strong>Meta:</strong></label>
            <input type="number" id="boxValueInputEditable" value={props.valueMax} onChange={handleValueBox} />
        </div>
    )
}

export default BoxValueEditable