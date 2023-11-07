import BoxesGroup from "../components/BoxesGroup/BoxesGroup";
import NavBarDefault from "../components/NavBarDefault/NavBarDefault";
import ProgressBar from "../components/ProgressBar/ProgressBar";

function CRUDBoxes() {
    return (
        <>
            <NavBarDefault name="Minhas caixinhas" backTo="0"/>
            <ProgressBar valueCurrent={10} valueMax={100} progress={1} width={60} height={6} top={19.5} backgroundStyle="var(--secondaryColor)" labelStyle="var(--primaryColor)"/>
            <BoxesGroup/>
        </>
    );
}

export default  CRUDBoxes;
