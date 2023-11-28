import { useState } from "react"
import EditableName from "../EditableName/EditableName"
import "./UserItems.css"
import EditableEmail from "../EditableEmail/EditableEmail"
import EditablePassword from "../EditablePassword/EditablePassword"

function UserItems(props:{name:string, email:string, password:string}){
    const [isEditName, setEditName] = useState(false)
    const [isEditEmail, setEditEmail] = useState(false)
    const [isEditPassword, setEditPassword] = useState(false)
    
    return(
        <>
            <label id="profileLB"><strong>Perfil</strong></label>
            <label id="accLB"><strong>Conta</strong></label>
            <hr id="hr1"></hr>
            <hr id="hr2"></hr>
            <hr id="hr3"></hr>
            <hr id="hr4"></hr>
            <label id="deleteACC"><strong>Exclusão de conta</strong></label>
            <hr id="hr5"></hr>
            <img src="/icon_edit.svg" className="EditI" id="EditName" onClick={() => setEditName(true)}/>
            <img src="/icon_edit.svg" className="EditI" id="EditEmail" onClick={() => setEditEmail(true)}/>
            <img src="/icon_edit.svg" className="EditI" id="EditPassword" onClick={() => setEditPassword(true)}/>
            {isEditName ? <EditableName editname={setEditName} name={props.name}/> : null}
            {isEditEmail ? <EditableEmail editEmail={setEditEmail} email={props.email}/> : null}
            {isEditPassword ? <EditablePassword editPassword={setEditPassword} password={props.password}/> : null}
        </>
    )
}

export default UserItems