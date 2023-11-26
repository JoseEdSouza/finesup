import BoxEditableContainer from "../components/BoxEditableContainer/BoxEditableContainer"
import NavBarDefault from "../components/NavBarDefault/NavBarDefault"

function UpdateBox() {
    return (
        <>
            <NavBarDefault name="Editar Caxinha" backTo="2"/>
            <BoxEditableContainer/>
        </>
    )
}

export default UpdateBox