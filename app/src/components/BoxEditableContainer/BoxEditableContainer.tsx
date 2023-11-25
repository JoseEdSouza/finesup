import { useLocation } from "react-router-dom"
import CreateButtons from "../CreateButtons/CreateButtons"
import BoxDescriptionEditable from "../BoxDescriptionEditable/BoxDescriptionEditable"
import BoxNameEditable from "../BoxNameEditable/BoxNameEditable"
import BoxValueEditable from "../BoxValueEditable/BoxValueEditable"
import "./BoxEditableContainer.css"

function BoxEditableContainer() {
    const location = useLocation()
    const data = location.state

    return (
        <div id="editableBoxContainer">
            <BoxNameEditable boxNameCurrent={data.name} />
            <BoxValueEditable valueMax={data.valueMax} />
            <BoxDescriptionEditable descriptionCurrent={"Descrição da caixinha " + data.name} />
            <CreateButtons nameButton="Editar caixinha" backTo="/1"/>
        </div>
    )
}

export default BoxEditableContainer