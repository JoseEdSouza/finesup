import "./EditableName.css"

function EditableName(props:{editname:(activaded:boolean)=>void, name: string}) {
    const changeEmail = () => {
        
    }
    
    
    return (
        <div style={{position: "absolute", width:"100vw", height: "130vh", left: "50%", transform: "translateX(-50%)", zIndex: "1"}}>
            <div id="editableName">
                <img src="/icon_cancel.svg" className="cancelIcon" onClick={() => props.editname(false)}/>
                <label id="labelEditName"><strong>Alterar Nome</strong></label>
                <label id="labelInputEditName"><strong>Nome atual</strong></label>
                <input type="text" id="InputEditName" value={props.name}/>
                <label id="labelInputEditNameConfirmed"><strong>Novo nome</strong></label>
                <input type="text" id="InputEditNameConfirmed"/>
                <button id="ConfirmedButton" onClick={() => props.editname(false)}>Confirmar novo nome</button>
            </div>
        </div>
    )
}

export default EditableName