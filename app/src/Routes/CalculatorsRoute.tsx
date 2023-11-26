import { useParams } from "react-router-dom"
import CalculatorSelectorSimple from "../components/CalculatorSelectorSimple/CalculatorSelectorSimple";
import CalculatorSelectCompound from "../components/CalculatorSelectorCompound/CalculatorSelectorCompound";

const CalculatorsRoute = () => {
    
    const {id} = useParams();
    
    return (
        <>
            {id === "1" ? <CalculatorSelectorSimple/> : <CalculatorSelectCompound/>}
        </>
    )
}

export default CalculatorsRoute