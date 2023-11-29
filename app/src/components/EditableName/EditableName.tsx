import { useState } from "react";
import UserController from "../../controllers/UserController"
import "./EditableName.css"

function EditableName(props:{editname:(activaded:boolean)=>void, name: string}) {
    const [newName, setNewName] = useState('');

    const handleNewNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value);
    }

    const changeName = () => UserController.changeName(newName);
    const onClick = () => {
        changeName()
        props.name = newName
        props.editname(false)
    }
    
    return (
        <div style={{position: "absolute", width:"100vw", height: "130vh", left: "50%", transform: "translateX(-50%)", zIndex: "1"}}>
            <div id="editableName">
                <img src="/icon_cancel.svg" className="cancelIcon" onClick={() => props.editname(false)}/>
                <label id="labelEditName"><strong>Alterar Nome</strong></label>
                <label id="labelInputEditName"><strong>Nome atual</strong></label>
                <input type="text" id="InputEditName" value={props.name}/>
                <label id="labelInputEditNameConfirmed"><strong>Novo nome</strong></label>
                <input type="text" id="InputEditNameConfirmed" value={newName} onChange={handleNewNameChange}/>
                <button id="ConfirmedButton" onClick={onClick}>Confirmar novo nome</button>
            </div>
        </div>
    )
}

export default EditableName