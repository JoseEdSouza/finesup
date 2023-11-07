import { Link } from "react-router-dom"
import "./BoxCreateButtons.css"

function BoxCreateButtons() {
    return (
        <div id="boxCreateButtons">
            <button id="createButton">Criar nova caixinha</button>
            <Link to="/1" id="linkToCRUD"><label id="cancelButton">Cancelar</label></Link>
        </div>
    )
}

export default BoxCreateButtons