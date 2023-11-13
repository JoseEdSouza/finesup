import "./GraphicsDisplay.css"
import GraphicPie from "../../../public/icon_graphicPie"
import GraphicBar from "../../../public/icon_graphicBar"
import GraphicLine from "../../../public/icon_graphicLine"
import { useState } from "react"

function GraphicsDisplay() {
    const [displaySelect, setDisplaySelect] = useState(0)

    const setPie = () =>{
        setDisplaySelect(0)
    }

    const setBar = () =>{
        setDisplaySelect(1)
    }

    const setLine = () =>{
        setDisplaySelect(2)
    }
    
    return (
        <div id="graphicsDisplay">
            <div id="pie" onClick={setPie} style={displaySelect === 0 ? {backgroundColor: "var(--secondaryColor)"} : {backgroundColor: "#714C9F", cursor: "pointer"}}>
                <GraphicPie/>
            </div>
            <div id="bar" onClick={setBar} style={displaySelect === 1 ? {backgroundColor: "var(--secondaryColor)"} : {backgroundColor: "#714C9F", cursor: "pointer"}}>
                <GraphicBar/>
            </div>
            <div id="line" onClick={setLine} style={displaySelect === 2 ? {backgroundColor: "var(--secondaryColor)"} : {backgroundColor: "#714C9F", cursor: "pointer"}}>
                <GraphicLine/>
            </div>
        </div>
    )
}

export default GraphicsDisplay