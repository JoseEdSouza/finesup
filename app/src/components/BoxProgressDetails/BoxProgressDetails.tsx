import ProgressBar from "../ProgressBar/ProgressBar"
import Box from "../../../public/boxIcon"
import "./BoxProgressDetails.css"

function BoxProgressDetails() {
    return (
        <div id="BoxProgressDetails">
            <label id="BoxDetailedName"><strong>Jetski</strong></label>
            <Box height="17.84vh" width="15vw"/>
            <ProgressBar valueCurrent={100} valueMax={1000} progress={1} height={5.25} width={22.48} top={29.94} labelStyle="var(--primaryColor)" backgroundStyle="var(--secondaryColor)"/>
        </div>
    )
}

export default BoxProgressDetails