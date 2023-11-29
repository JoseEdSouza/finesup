import NavBarDefault from "../components/NavBarDefault/NavBarDefault"
import TransactionsFixedContainer from "../components/TransactionsFixedContainer/TransactionsFixedContainer"

function FixedTransactions() {
    return (
        <>
            <NavBarDefault name="Transações Fixas" backTo="4"/>
            <TransactionsFixedContainer/>
        </>
    )
}

export default FixedTransactions