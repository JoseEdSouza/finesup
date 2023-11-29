import { useState } from "react";
import BoxesGroup from "../components/BoxesGroup/BoxesGroup";
import NavBarDefault from "../components/NavBarDefault/NavBarDefault";
import ProgressBar from "../components/ProgressBar/ProgressBar";

function CRUDBoxes() {
    const [allActualValue, setAllActualValue] = useState(0)
    const [allFinalValue, setAllFinalValue] = useState(0)
    
    return (
        <>
            <NavBarDefault name="Minhas caixinhas" backTo="0"/>
            <ProgressBar valueCurrent={allActualValue} valueMax={allFinalValue} progress={1} width={60} height={6} top={19.5} backgroundStyle="var(--secondaryColor)" labelStyle="var(--primaryColor)"/>
            <BoxesGroup setSumAllActual={(e) => setAllActualValue(e)}  setSumAllFinal={(e) => setAllFinalValue(e)}/>
        </>
    );
}

export default  CRUDBoxes;
