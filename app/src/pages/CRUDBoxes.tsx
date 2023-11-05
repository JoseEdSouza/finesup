import BoxesGroup from "../components/BoxesGroup/BoxesGroup";
import NavBarDefault from "../components/NavBarDefault/NavBarDefault";
import ProgressBar from "../components/ProgressBar/ProgressBar";

function CRUDBoxes() {
    return (
        <>
            <NavBarDefault name="Minhas caixinhas" backTo="0"/>
            <ProgressBar valueCurrent={100} valueMax={100} progress={1}/>
            <BoxesGroup/>
        </>
    );
}

export default  CRUDBoxes;
