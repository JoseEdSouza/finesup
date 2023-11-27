import { Link } from "react-router-dom"
import "./CreateButtons.css"

function CreateButtons(props:{nameButton:string, backTo:string, buttonClick:(actived:boolean) => void}) {
    return (
        <div id="boxCreateButtons">
            <button id="createButton" onClick={() => props.buttonClick(true)}>{props.nameButton}</button>
            <Link to={props.backTo} id="linkToCRUD"><label id="cancelButton">Cancelar</label></Link>
        </div>
    )
}

export default CreateButtons