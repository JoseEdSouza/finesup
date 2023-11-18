import { useParams } from "react-router-dom"
import CRUDBoxes from "../pages/CRUDBoxes";
import TransactionHistory from "../pages/TransactionHistory";
import MyBudget from "../pages/MyBudget";

const HomeRoute = () => {
    
    const {id} = useParams();
    
    return (
        <>
            {id === "1" ? <CRUDBoxes/> : id === "2" ? <TransactionHistory/> : <MyBudget/>}
        </>
    )
}

export default HomeRoute