import { ChangeEvent} from "react";
import "./BoxNameInput.css";

function BoxNameInput(props:{ onSubmit: (data:string) => void}) {
    
    const handleName = (e:ChangeEvent<HTMLInputElement>) =>{
        props.onSubmit(e.target.value)
    }

    return (
        <div id="boxNameInput">
            <label id="boxlabelname"><strong>Nome:</strong></label>
            <input type="text" id="boxlabelInput" placeholder="Ex: viagem" onChange={handleName}/>
        </div>
    )
}

export default BoxNameInput