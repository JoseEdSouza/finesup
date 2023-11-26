import ElipseUser from "../ElipseUser/ElipseUser"
import UserInputs from "../UserInputs/UserInputs"
import UserItems from "../UserItems/UserItems"
import "./UserComp.css"

function UserComp(){
    return(
        <div id="divUser">
            <ElipseUser/>
            <UserItems/>
            <UserInputs/>
        </div>
    )
}

export default UserComp