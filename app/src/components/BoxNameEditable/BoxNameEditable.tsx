import { ChangeEvent, useState } from "react"
import "./BoxNameEditable.css"

function BoxNameEditable(props:{boxNameCurrent:string}) {
    const [boxName, setBoxName] = useState<string>(props.boxNameCurrent)

    const handleBoxName = (e:ChangeEvent<HTMLInputElement>) =>{
        setBoxName(e.target.value)
    }
    
    return (
        <div id="boxNameEditable">
            <label id="boxLabelName"><strong>Nome:</strong></label>
            <input type="text" id="boxlabelEditable" value={boxName} onChange={handleBoxName}/>
        </div>
    )
}

export default BoxNameEditable