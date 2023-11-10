import Box from "../Box/Box";
import "./BoxesGroup.css";
import { Link } from "react-router-dom";

function BoxesGroup(){
    return(
        <div id="containerBoxes">
            <Box name="Jetski" valueCurrent={1000} valueMax={2500} />
            <Box name="Frigobar" valueCurrent={100} valueMax={2500}/>
            <Box name="Geladeira" valueCurrent={1250} valueMax={2500}/>
            <Box name="Teste" valueCurrent={2500} valueMax={2500}/>
            <Box name="Teste" valueCurrent={2500} valueMax={2500}/>
            <Box name="Teste" valueCurrent={2500} valueMax={2500}/>
            <Box name="Teste" valueCurrent={2500} valueMax={2500}/>
            <Box name="Teste" valueCurrent={2500} valueMax={2500}/>
            <Box name="Teste" valueCurrent={2500} valueMax={2500}/>
            <Box name="Teste" valueCurrent={2500} valueMax={2500}/>
            <Box name="Teste" valueCurrent={2500} valueMax={2500}/>
            <Box name="Teste" valueCurrent={2500} valueMax={2500}/>
            <Link to="/1/addBoxes">
                <button id="plus">
                    <img src="./plus_icon.svg" id="icon"/>
                </button>
            </Link>
        </div>
    );
}

export default BoxesGroup;