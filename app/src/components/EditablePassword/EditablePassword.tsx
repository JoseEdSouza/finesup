import "./EditablePassword.css"

function EditablePassword(props:{editPassword:(activaded:boolean)=>void, password:string}) {
    return (
        <div style={{position: "absolute", width:"100vw", height: "130vh", left: "50%", transform: "translateX(-50%)", zIndex: "1"}}>
            <div id="editablePassword">
                <img src="/icon_cancel.svg" className="cancelIcon" onClick={() => props.editPassword(false)}/>
                <label id="labelEditPassword"><strong>Alterar senha</strong></label>
                <label id="labelInputEditPassword"><strong>Senha atual</strong></label>
                <input type="text" id="InputEditPassword" value={props.password}/>
                <label id="labelInputEditPasswordConfirmed"><strong>Nova senha</strong></label>
                <input type="text" id="InputEditPasswordConfirmed"/>
                <label id="labelInputEditPasswordConfirmedAgain"><strong>Confirmar nova senha</strong></label>
                <input type="text" id="InputEditPasswordConfirmedAgain"/>
                <button id="ConfirmedButton" onClick={() => props.editPassword(false)}>Confirmar nova senha</button>
            </div>
        </div>    )
}

export default EditablePassword