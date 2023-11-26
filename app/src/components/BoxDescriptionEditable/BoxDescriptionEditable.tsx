import { ChangeEvent, useState } from "react"
import "./BoxDescriptionEditable.css"

function BoxDescriptionEditable(props:{descriptionCurrent:string}){
    const [boxDescription, setBoxDescription] = useState<string>(props.descriptionCurrent)

    const handleBoxDescription = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        setBoxDescription(e.target.value)
    }

    return (
        <div id="boxDescriptionEditable">
            <label id="boxlabelDescriptionEditable"><strong>Descrição:</strong></label>
            <textarea id="boxInputDescriptionEditable" value={boxDescription} onChange={handleBoxDescription}/>
        </div>
        )
}

export default BoxDescriptionEditable