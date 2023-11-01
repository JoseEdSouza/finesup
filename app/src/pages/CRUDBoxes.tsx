import BoxesGroup from "../components/BoxesGroup/BoxesGroup";
import NavBar from "../components/NavBar/NavBar";
import ProgressBar from "../components/ProgressBar/ProgressBar";

function CRUDBoxes() {
    return (
        <>
            <NavBar name="Minhas caixinhas"/>
            <ProgressBar valueCurrent={100} valueMax={100} progress={1}/>
            <BoxesGroup/>
        </>
    );
}

export default  CRUDBoxes;
