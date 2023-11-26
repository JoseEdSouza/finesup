import { ChangeEvent } from "react";
import "./BoxValueInput.css";

function BoxValueInput(props:{ onSubmit: (data:number) => void}) {
    
    const handleValue = (e:ChangeEvent<HTMLInputElement>) =>{
        props.onSubmit(+ e.target.value)
    }
    
    return (
        <div id="boxValueInput">
            <label id="boxlabelvalue"><strong>Meta:</strong></label>
            <input type="number" id="boxlabelInputValue" placeholder="R$" onChange={handleValue}/>
        </div>
    )
}

export default BoxValueInput