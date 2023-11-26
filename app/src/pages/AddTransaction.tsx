import NavBarDefault from "../components/NavBarDefault/NavBarDefault"
import TransactionCreateContainer from "../components/TransactionCreateContainer/TransactionCreateContainer"

function AddTransaction() {
    return (
        <>
            <NavBarDefault name="Criar Lançamento" backTo="4"/>
            <TransactionCreateContainer/>
        </>
    )
}

export default AddTransaction