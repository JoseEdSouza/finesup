import ProgressBar from "../ProgressBar/ProgressBar";
import "./BoxContainerHome.css";

function BoxContainerHome(){
    return(
        <div id="boxContainer">
            <label id="labelBoxes"><strong>Minhas caixinhas</strong></label>
            <ProgressBar valueCurrent={100} valueMax={1000} progress={1} height={2.92} width={28.99} top={7.91} backgroundStyle="var(--primaryColor)" labelStyle="var(--secondaryColor)"/>
        </div>
    );
}

export default BoxContainerHome;