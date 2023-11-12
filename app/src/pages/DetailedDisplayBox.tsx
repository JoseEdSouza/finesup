import { useLocation } from "react-router-dom"
import BoxDetails from "../components/BoxDetails/BoxDetails"
import BoxProgressDetails from "../components/BoxProgressDetails/BoxProgressDetails"
import NavBarDefault from "../components/NavBarDefault/NavBarDefault"
import { useState } from "react";

function DetailedDisplayBox() {
    const location = useLocation();
    const data = location.state

    const [valueBoxChange, setValueBox] = useState<number>(0)

    const handleValueBox = (valueBox:number) =>{
        setValueBox(valueBox)
    }

    const updateValueBox = ():number =>{
        let update = data.valueCurrent + valueBoxChange

        if(update <= 0){
            data.valueCurrent = 0
        }
        else if(update >= data.valueMax){
            data.valueCurrent = data.valueMax
        }
        return data.valueCurrent + valueBoxChange
    }
    
    return (
        <>
            <NavBarDefault name={data.name} backTo="2"/>
            <BoxProgressDetails name={data.name} valueCurrent={updateValueBox()} valueMax={data.valueMax}/>   
            <BoxDetails valueMax={data.valueMax} onValueBox={(updateValue) => (handleValueBox(updateValue(valueBoxChange)))}/>
        </>
    )
}

export default DetailedDisplayBox