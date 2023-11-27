import NavBarDefault from "../components/NavBarDefault/NavBarDefault"
import TransactionDetailed from "../components/TransactionDetailed/TransactionDetailed"

function DetailedTransaction() {
    
    return (
        <>
            <NavBarDefault name="Detalhes Lançamento" backTo="4"/>
            <TransactionDetailed/>
        </>
    )
}

export default DetailedTransaction