import DateDisplay from "../components/DateDisplay/DateDisplay"
import NavBarDefault from "../components/NavBarDefault/NavBarDefault"
import TransactionContainer from "../components/TransactionContainer/TransactionContainer"

function TransHistory() {
    return (
        <>
            <NavBarDefault name="Lançamentos" backTo="4" />
            <div style={{ position: "absolute", height: "3vh", width: "4vw", left: "30.5%" }}>
                <DateDisplay />
            </div>
            <div style={{ position: "absolute", left:"50%", transform:"translateX(-50%)", width:"94.4vw", top:"35vh"}}>
                <TransactionContainer />
            </div>
        </>
    )
}

export default TransHistory