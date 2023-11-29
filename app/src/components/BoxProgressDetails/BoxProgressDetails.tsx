import ProgressBar from "../ProgressBar/ProgressBar"
import Box from "../../../public/boxIcon"
import "./BoxProgressDetails.css"

function BoxProgressDetails(props:{name:string | undefined, valueCurrent:number, valueMax:number}) {
    return (
        <div id="BoxProgressDetails">
            <label id="BoxDetailedName"><strong>{props.name}</strong></label>
            <Box height="17.84vh" width="15vw"/>
            <ProgressBar valueCurrent={props.valueCurrent} valueMax={props.valueMax} progress={1} height={5.25} width={22.48} top={29.94} labelStyle="var(--primaryColor)" backgroundStyle="var(--secondaryColor)"/>
        </div>
    )
}

export default BoxProgressDetails