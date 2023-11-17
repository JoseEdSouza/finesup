import "./BudgetLabels.css"

function BudgetLabels(){
    return(
        <div id="divLabels">
            <label id="labelValue"><strong>Valor</strong></label>
            <label id="labelRenovation"><strong>Data renovação</strong></label>
            <label id="labelCategorie"><strong>Atribuir categoria</strong></label>
        </div>
    )
}

export default BudgetLabels