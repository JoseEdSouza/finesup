import NavBarDefault from "../components/NavBarDefault/NavBarDefault"
import TransactionDetailed from "../components/TransactionDetailed/TransactionDetailed"

function TransactionDetails() { 
    return (
        <>
            <NavBarDefault name="Detalhes Lançamento" backTo="4"/>
            <TransactionDetailed/>
        </>
    )
}

export default TransactionDetails