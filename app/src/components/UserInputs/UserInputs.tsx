import "./UserInputs.css"

function UserInputs(props: { name: string, email: string, password: string }) {


    const getPoints = (): string => {
        let pass = ""
        for (let x = 0; x < props.password.length; ++x) {
            pass += "•"
        }
        return pass
    }
    return (
        <div id="divUserI">
            <label id="nameU"><strong>Nome</strong></label>
            <input id="nameUser" value={props.name} />

            <label id="emailU"><strong>E-mail</strong></label>
            <input type="email" id="emailUser" value={props.email} />

            <label id="passwordU"><strong>Senha</strong></label>
            <input type="password" id="passwordUser" value={getPoints()} />
        </div>
    )
}

export default UserInputs