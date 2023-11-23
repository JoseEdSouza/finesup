import GraphicsContainer from "../components/GraphicsContainer/GraphicsContainer"
import NavBarDefault from "../components/NavBarDefault/NavBarDefault"

function Graphics() {
    return (
        <>  
            <NavBarDefault name="Gráficos" backTo="0"/>
            <GraphicsContainer/>
        </>
    )
}

export default Graphics