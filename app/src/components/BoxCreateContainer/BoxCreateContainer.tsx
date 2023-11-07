import BoxCreateButtons from "../BoxCreateButtons/BoxCreateButtons";
import BoxDescriptionInput from "../BoxDescriptionInput/BoxDescriptionInput";
import BoxNameInput from "../BoxNameInput/BoxNameInput";
import BoxValueInput from "../BoxValueInput/BoxValueInput";
import "./BoxCreateContainer.css";

function BoxCreateContainer() {
    return (
        <div id="createBoxContainer">
            <BoxNameInput/>
            <BoxValueInput/>
            <BoxDescriptionInput/>
            <BoxCreateButtons/>
        </div>
    )
}

export default BoxCreateContainer