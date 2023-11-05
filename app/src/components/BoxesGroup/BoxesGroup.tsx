import Box from "../Box/Box";
import "./BoxesGroup.css";
import { Link } from "react-router-dom";
function BoxesGroup(){
    return(
        <div id="containerBoxes">
            <Box name="Jetski" valueCurrent={2000} valueMax={2500}/>
            <Link to="/1/addBoxes">
                <button id="plus">
                    <img src="./plus_icon.svg" id="icon"/>
                </button>
            </Link>
        </div>
    );
}

export default BoxesGroup;