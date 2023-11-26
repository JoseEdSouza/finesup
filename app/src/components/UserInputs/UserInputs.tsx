import "./UserInputs.css"

function UserInputs(){
    return(
        <div id="divUserI">
            <label id="nameU"><strong>Nome</strong></label>
            <input type="text" id="nameUser"/>

            <label id="emailU"><strong>E-mail</strong></label>
            <input type="email" id="emailUser" placeholder="myemail@example.com"/>

            <label id="passwordU"><strong>Senha</strong></label>
            <input type="password" id="passwordUser" placeholder="••••••••"/>
        </div>
    )
}

export default UserInputs