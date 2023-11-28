import { ChangeEvent, useEffect, useState } from "react"
import "./BoxDescriptionEditable.css"

function BoxDescriptionEditable(props:{descriptionCurrent:string, setDescription: (description: string) => void }){
    const [boxDescription, setBoxDescription] = useState<string>("")

    const handleBoxDescription = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        setBoxDescription(e.target.value)
        props.setDescription(boxDescription)
    }

    useEffect(()=>{
        setBoxDescription(props.descriptionCurrent)
    },[])

    return (
        <div id="boxDescriptionEditable">
            <label id="boxlabelDescriptionEditable"><strong>Descrição:</strong></label>
            <textarea id="boxInputDescriptionEditable" value={boxDescription} onChange={handleBoxDescription}/>
        </div>
        )
}

export default BoxDescriptionEditable