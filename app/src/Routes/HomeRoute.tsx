import { useParams } from "react-router-dom"
import CRUDBoxes from "../pages/CRUDBoxes";
import TransactionHistory from "../pages/TransactionHistory";

const HomeRoute = () => {
    
    const {id} = useParams();
    
    return (
        <>
            {id === "1" ? <CRUDBoxes/> : id === "2" ? <TransactionHistory/> : <></>}
        </>
    )
}

export default HomeRoute