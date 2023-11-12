import { Link } from "react-router-dom"
import "./BoxCreateButtons.css"

function BoxCreateButtons(props:{nameButton:string}) {
    return (
        <div id="boxCreateButtons">
            <button id="createButton">{props.nameButton}</button>
            <Link to="/1" id="linkToCRUD"><label id="cancelButton">Cancelar</label></Link>
        </div>
    )
}

export default BoxCreateButtons