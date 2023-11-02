import BoxContainerHome from "../components/BoxContainerHome/BoxContainerHome"
import BudgetContainerHome from "../components/BudgetContainerHome/BudgetContainerHome"
import TransactionContainerHome from "../components/TransactionContainerHome/TransactionContainerHome"

function Home() {
    return (
        <>
            <BoxContainerHome/>
            <TransactionContainerHome/>
            <BudgetContainerHome/>
        </>
    )
}

export default Home