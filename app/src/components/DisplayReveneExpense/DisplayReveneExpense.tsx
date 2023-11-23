import { useEffect, useState } from "react"
import "./DisplayReveneExpense.css"

function DisplayReveneExpense(props: { setTypeTransactions: (e: number) => void }) {
    const [display, setDisplay] = useState(0)

    const handleDisplayRevenue = () =>{
        setDisplay(0)
    }

    const handleDisplayExpense = () =>{
        setDisplay(1)
    }

    useEffect (() =>{
        props.setTypeTransactions(display)
    }, [display])

    return (
        <div id="DisplayReveneExpense">
            <div id="displayRevenue" onClick={handleDisplayRevenue} style={display === 0 ? { backgroundColor: "var(--primaryColor)" } : { backgroundColor: "var(--thirdColor)", cursor: "pointer", transform: "scale(1.06)", zIndex: "2" }}>
                <label id="displayRevenueLabel" style={display === 1 ? { cursor: "pointer" } : {}}><strong>Receita</strong></label>
            </div>
            <div id="displayExpense" onClick={handleDisplayExpense} style={display === 1 ? { backgroundColor: "var(--primaryColor)" } : { backgroundColor: "var(--thirdColor)", cursor: "pointer", transform: "scale(1.06)", zIndex: "2" }}>
                <label id="displayExpenseLabel" style={display === 0 ? { cursor: "pointer" } : {}}><strong>Despesa</strong></label>
            </div>
        </div>
    )
}

export default DisplayReveneExpense