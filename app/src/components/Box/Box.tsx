import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Box.css";
import { useState } from "react";

function Box(props:{name:string, valueCurrent:number, valueMax:number}){
    
    const [DatasForLink] = useState({
        name: props.name,
        valueCurrent: props.valueCurrent,
        valueMax: props.valueMax
    })

    const setValueBar = () => {
        let valueBar = Number(((props.valueCurrent/props.valueMax)*100).toFixed(2));
        
        if(valueBar > 100){
            valueBar = 100;
        }
        return valueBar;
    }

    return(
        <div id="box">
            <label id="labelBox">{props.name}</label>

            <Link to="/1/detailedDisplayBox" state={DatasForLink} >
                <img src="icon_box.svg" id="iconBox"/>
                <strong><label id="labelValueProgress">{setValueBar()}%</label></strong>
            </Link>

            <Link to="/1/updateBox" state={DatasForLink}>
                <img src="icon_edit.svg" id="iconEdit"/>
            </Link>
            <img src="icon_delete.svg" id="iconDelete"/>

            <ProgressBar valueCurrent={props.valueCurrent} valueMax={props.valueMax} progress={0} width={6.73} height={1.75} top={18.84} backgroundStyle="var(--primaryColor)" labelStyle=""/>
        </div>
    );
}

export default Box;