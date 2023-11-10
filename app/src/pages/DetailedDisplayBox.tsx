import { useLocation } from "react-router-dom"
import BoxDetails from "../components/BoxDetails/BoxDetails"
import BoxProgressDetails from "../components/BoxProgressDetails/BoxProgressDetails"
import NavBarDefault from "../components/NavBarDefault/NavBarDefault"

function DetailedDisplayBox() {
    const location = useLocation();
    const data = location.state

    return (
        <>
            <NavBarDefault name={data.name} backTo="2"/>
            <BoxDetails valueMax={data.valueMax}/>
            <BoxProgressDetails name={data.name} valueCurrent={data.valueCurrent} valueMax={data.valueMax}/>   
        </>
    )
}

export default DetailedDisplayBox