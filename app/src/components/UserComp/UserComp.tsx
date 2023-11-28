import { useState } from "react"
import ElipseUser from "../ElipseUser/ElipseUser"
import UserButtons from "../UserButtons/UserButtons"
import UserInputs from "../UserInputs/UserInputs"
import UserItems from "../UserItems/UserItems"
import "./UserComp.css"
import Session from "../../services/Session"

function UserComp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userName = Session.getInstance().user.name
    const userEmail = Session.getInstance().user.email
    const userPassword = Session.getInstance().user.password

    return(
        <div id="divUser">
            <ElipseUser/>
            <UserItems name={userName} email={userEmail} password={userPassword}/>
            <UserInputs name={userName} email={userEmail} password={userPassword}/>
            <UserButtons nameButton="Salvar Alteralções" backTo="/home"/>
        </div>
    )
}

export default UserComp