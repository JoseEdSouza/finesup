import { Link } from "react-router-dom"
import "./CreateButtons.css"

function CreateButtons(props:{nameButton:string, backTo:string}) {
    return (
        <div id="boxCreateButtons">
            <Link to={props.backTo}><button id="createButton">{props.nameButton}</button></Link>
            <Link to={props.backTo} id="linkToCRUD"><label id="cancelButton">Cancelar</label></Link>
        </div>
    )
}

export default CreateButtons