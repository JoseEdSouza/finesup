import "./ProgressBar.css";

function ProgressBar(props:{valueMax:number, valueCurrent:number, progress:number}){
    
    const setValueBar = (valueCurrent:number, valueMax:number) => {
        let valueBar = Number(((valueCurrent/valueMax)*100).toFixed(2));
        
        if(valueBar > 100){
            valueBar = 100;
        }

        return valueBar;
    }
    
    const setColorBar = (valueCurrent:number, valueMax:number) => {
        let colorBar = Number(((valueCurrent/valueMax)*100).toFixed(2));

        if(colorBar >= 0 && colorBar <= 10){
            return '#740101';
        }
        else if(colorBar > 10 && colorBar <= 30){
            return '#e20202';
        }
        else if(colorBar > 30 && colorBar <= 60){
            return 'yellow';
        }
        else if(colorBar > 60 && colorBar <= 80){
            return 'rgb(0, 143, 7)';
        }
        else if(colorBar > 80){
            return '#62CB51';
        }
    }

    const getLabelProgress = (progress:number) => {
        if(progress === 1){
            return <label id="labelProgress"><strong>{setValueBar(props.valueCurrent, props.valueMax)}%</strong></label>
        }
    }
    return(
        <div id="totalBar">
            <div id="progressBar" style={{width: setValueBar(props.valueCurrent, props.valueMax)+'%', backgroundColor: setColorBar(props.valueCurrent, props.valueMax)}}></div>
            {getLabelProgress(props.progress)}
        </div>
    );
}

export default ProgressBar;