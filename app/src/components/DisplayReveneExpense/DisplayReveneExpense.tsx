import { useState } from "react"
import "./DisplayReveneExpense.css"

function DisplayReveneExpense() {
    const [display, setDisplay] = useState(0)
    
    return (
        <div id="DisplayReveneExpense">
            <div id="displayRevenue" onClick={() => setDisplay(0)} style={display === 0 ? {backgroundColor: "var(--primaryColor)"} : {backgroundColor: "var(--thirdColor)", cursor: "pointer", transform: "scale(1.06)", zIndex: "2"}}>
                <label id="displayRevenueLabel" style={display === 1 ? {cursor: "pointer"} : {}}><strong>Receita</strong></label>
            </div>
            <div id="displayExpense" onClick={() => setDisplay(1)} style={display === 1 ? {backgroundColor: "var(--primaryColor)"} : {backgroundColor: "var(--thirdColor)", cursor: "pointer", transform: "scale(1.06)", zIndex: "2"}}>
                <label id="displayExpenseLabel" style={display === 0 ? {cursor: "pointer"} : {}}><strong>Despesa</strong></label>
            </div>
        </div>
    )
}

export default DisplayReveneExpense