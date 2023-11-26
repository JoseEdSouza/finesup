import NavBarUser from "../components/NavBarUser/NavBarUser";
import UserComp from "../components/UserComp/UserComp";


function UserScreen(){
    return(
        <>
            <UserComp/>
            <NavBarUser name="Editar Perfil" backTo="/home"/>
        </>
    )
}

export default UserScreen