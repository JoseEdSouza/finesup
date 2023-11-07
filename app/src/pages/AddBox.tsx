import BoxCreateContainer from "../components/BoxCreateContainer/BoxCreateContainer";
import NavBarDefault from "../components/NavBarDefault/NavBarDefault";

function AddBox(){
    return (
        <>
        <NavBarDefault name="Criar uma nova caixinha" backTo="2"/>
        <BoxCreateContainer/>
        </>
    )
}

export default AddBox