import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./BoxContainerHome.css";
import BoxHome from "../BoxHome/BoxHome";

function BoxContainerHome() {
    const [boxFlag] = useState(true)

    return (
        <div id="boxContainer">
            <label id="labelBoxes"><strong>Minhas caixinhas</strong></label>
            {boxFlag === true
                ? <>
                    <ProgressBar valueCurrent={100} valueMax={1000} progress={1} height={2.92} width={28.99} top={7.91} backgroundStyle="var(--primaryColor)" labelStyle="var(--secondaryColor)" />
                    <div id="boxGridHome">
                        <BoxHome name="Erick" valueCurrent={198} valueMax={1000}/>
                    </div>
                </>
                : <label id="boxLess"><strong>Sem caixinhas no momento. Clique para adicionar !!!</strong></label>
            }
        </div>
    );
}

export default BoxContainerHome;