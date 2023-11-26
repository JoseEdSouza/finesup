import { ChangeEvent} from "react";
import "./BoxDescriptionInput.css";

function BoxDescriptionInput(props:{ onSubmit: (data:string) => void}) {
    
    const handleDescription = (event:ChangeEvent<HTMLTextAreaElement>) => {
        props.onSubmit(event.target.value)
    }

    return (
        <div id="boxDescriptionInput">
            <label htmlFor="" id="boxlabelDescription"><strong>Descrição:</strong></label>
            <textarea id="boxInputDescription" placeholder="Ex: viagem para a praia" onChange={handleDescription}/>
        </div>
    )
}

export default BoxDescriptionInput