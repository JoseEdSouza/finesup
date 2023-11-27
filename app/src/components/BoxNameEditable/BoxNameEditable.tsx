import { ChangeEvent, useEffect, useState } from "react"
import "./BoxNameEditable.css"

function BoxNameEditable(props: { boxNameCurrent: string, setName: (nameBox: string) => void }) {
    const [boxName, setBoxName] = useState<string>("")

    const handleBoxName = (e: ChangeEvent<HTMLInputElement>) => {
        setBoxName(e.target.value)
        props.setName(boxName)
    }

    useEffect(() =>{
        setBoxName(props.boxNameCurrent)
    },[])

    return (
        <div id="boxNameEditable">
            <label id="boxLabelName"><strong>{props.boxNameCurrent}</strong></label>
            <input type="text" id="boxlabelEditable" value={boxName} onChange={handleBoxName} />
        </div>
    )
}

export default BoxNameEditable