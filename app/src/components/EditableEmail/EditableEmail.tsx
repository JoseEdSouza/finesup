import { useState } from "react";
import UserController from "../../controllers/UserController"
import "./EditableEmail.css"

function EditableEmail(props:{editEmail:(activaded:boolean)=>void, email:string}) {
    const [newEmail, setNewEmail] = useState(''); // novo estado para o novo email

    const changeEmail = () => UserController.updateEmail(newEmail);
    const onClick = () => {
        changeEmail()
        props.email = newEmail
        props.editEmail(false)
    }
    return (
        <div style={{position: "absolute", width:"100vw", height: "130vh", left: "50%", transform: "translateX(-50%)", zIndex: "1"}}>
            <div id="editableEmail">
                <img src="/icon_cancel.svg" className="cancelIcon" onClick={() => props.editEmail(false)}/>
                <label id="labelEditEmail"><strong>Alterar Email</strong></label>
                <label id="labelInputEditEmail"><strong>Email atual</strong></label>
                <input type="text" id="InputEditEmail" value={props.email}/>
                <label id="labelInputEditEmailConfirmed"><strong>Novo email</strong></label>
                <input type="text" id="InputEditEmailConfirmed" value={newEmail} onChange={e=>setNewEmail(e.target.value)}/>
                <button id="ConfirmedButton" onClick={onClick}>Confirmar novo email</button>
            </div>
        </div>
    )
}

export default EditableEmail