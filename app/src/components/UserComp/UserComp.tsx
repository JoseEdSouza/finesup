import ElipseUser from "../ElipseUser/ElipseUser"
import UserButtons from "../UserButtons/UserButtons"
import UserInputs from "../UserInputs/UserInputs"
import UserItems from "../UserItems/UserItems"
import "./UserComp.css"

function UserComp(){
    return(
        <div id="divUser">
            <ElipseUser/>
            <UserItems/>
            <UserInputs/>
            <UserButtons nameButton="Salvar Alteralções" backTo="/home"/>
        </div>
    )
}

export default UserComp