import { ChangeEvent, useState } from "react"
import "./BoxNameEditable.css"

function BoxNameEditable(props: { boxNameCurrent: string, setName: (nameBox: string) => void }) {
    const [nameBox, setNameBox] = useState(props.boxNameCurrent)

    const handleChangeName = (e:ChangeEvent<HTMLInputElement>) =>{
        setNameBox(e.target.value)
    }
    
    return (
        <div id="boxNameEditable">
            <label id="boxLabelName"><strong>Nome:</strong></label>
            <input type="text" id="boxlabelEditable" value={nameBox} onChange={handleChangeName} />
        </div>
    )
}

export default BoxNameEditable