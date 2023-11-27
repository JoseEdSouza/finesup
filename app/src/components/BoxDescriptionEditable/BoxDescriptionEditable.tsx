import { ChangeEvent, useState } from "react"
import "./BoxDescriptionEditable.css"

function BoxDescriptionEditable(props:{descriptionCurrent:string, setDescription: (description: string) => void }){
    const [boxDescription, setBoxDescription] = useState<string>(props.descriptionCurrent)

    const handleBoxDescription = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        setBoxDescription(e.target.value)
        props.setDescription(boxDescription)
    }

    return (
        <div id="boxDescriptionEditable">
            <label id="boxlabelDescriptionEditable"><strong>Descrição:</strong></label>
            <textarea id="boxInputDescriptionEditable" value={props.descriptionCurrent} onChange={handleBoxDescription}/>
        </div>
        )
}

export default BoxDescriptionEditable