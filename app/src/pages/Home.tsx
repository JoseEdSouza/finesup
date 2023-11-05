import { Link } from "react-router-dom"
import BoxContainerHome from "../components/BoxContainerHome/BoxContainerHome"
import BudgetContainerHome from "../components/BudgetContainerHome/BudgetContainerHome"
import TransactionContainerHome from "../components/TransactionContainerHome/TransactionContainerHome"

function Home() {
    return (
        <>
            <Link to="/1">
                <BoxContainerHome/>
            </Link>
            <TransactionContainerHome/>
            <BudgetContainerHome/>
        </>
    )
}

export default Home