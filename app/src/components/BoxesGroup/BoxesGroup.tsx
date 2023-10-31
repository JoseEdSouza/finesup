import Box from "../Box/Box";
import "./BoxesGroup.css";

function BoxesGroup(){
    return(
        <div id="container">
            <Box name="Jetski" valueCurrent={2000} valueMax={2500}/>
            <button id="plus">
                <img src="./plus_icon.svg" id="icon"/>
            </button>
        </div>
    );
}

export default BoxesGroup;