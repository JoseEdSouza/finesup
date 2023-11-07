import ProgressBar from "../ProgressBar/ProgressBar";
import "./Box.css";

function Box(props:{name:string, valueCurrent:number, valueMax:number}){
    return(
        <div id="box">
            <label id="labelBox">{props.name}</label>
            <img src="icon_box.svg" id="iconBox"/>
            <img src="icon_edit.svg" id="iconEdit"/>
            <img src="icon_delete.svg" id="iconDelete"/>
        </div>
    );
}

export default Box;