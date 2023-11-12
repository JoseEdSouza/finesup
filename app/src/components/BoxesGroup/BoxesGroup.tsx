import Box from "../Box/Box";
import "./BoxesGroup.css";
import { Link } from "react-router-dom";

function BoxesGroup(){
    return(
        <div id="containerBoxes">
            <Box name="Jetski que eu vou comprar ano que vem pra minha irma teresa em belo horizonte" valueCurrent={1000} valueMax={2900} />
            <Box name="Frigobar" valueCurrent={100} valueMax={500}/>
            <Box name="Geladeira" valueCurrent={1250} valueMax={2500}/>
            <Link to="/1/addBoxes">
                <button id="plus">
                    <img src="./plus_icon.svg" id="icon"/>
                </button>
            </Link>
        </div>
    );
}

export default BoxesGroup;