import "./UserItems.css"

function UserItems(){
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
            <img src="/icon_edit.svg" className="EditI" id="EditName"/>
            <img src="/icon_edit.svg" className="EditI" id="EditEmail"/>
            <img src="/icon_edit.svg" className="EditI" id="EditPassword"/>
        </>
    )
}

export default UserItems