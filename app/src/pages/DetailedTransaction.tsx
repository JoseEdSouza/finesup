import { useLocation } from "react-router-dom"
import NavBarDefault from "../components/NavBarDefault/NavBarDefault"
import TransactionDetailed from "../components/TransactionDetailed/TransactionDetailed"

function DetailedTransaction() {
    const location = useLocation()
    const data = location.state
    
    return (
        <>
            <NavBarDefault name="Detalhes Lançamento" backTo="4"/>
            <TransactionDetailed data={data}/>
        </>
    )
}

export default DetailedTransaction