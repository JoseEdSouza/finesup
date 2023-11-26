import { useLocation } from "react-router-dom"
import NavBarDefault from "../components/NavBarDefault/NavBarDefault"
import TransactionCreateContainer from "../components/TransactionCreateContainer/TransactionCreateContainer"

function AddTransaction() {
    const location = useLocation()
    const value = location.state
    return (
        <>
            <NavBarDefault name="Criar Lançamento" backTo="4"/>
            <TransactionCreateContainer value={value}/>
        </>
    )
}

export default AddTransaction