import { ChangeEvent} from "react"
import "./BoxNameEditable.css"

function BoxNameEditable(props: { boxNameCurrent: string, setName: (nameBox: string) => void }) {

    const handleBoxName = (e: ChangeEvent<HTMLInputElement>) => {
        props.setName(e.target.value)
    }


    return (
        <div id="boxNameEditable">
            <label id="boxLabelName"><strong>Name:</strong></label>
            <input type="text" id="boxlabelEditable" value={props.boxNameCurrent} onChange={handleBoxName} />
        </div>
    )
}

export default BoxNameEditable