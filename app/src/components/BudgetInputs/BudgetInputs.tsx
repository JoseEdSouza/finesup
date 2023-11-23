import "./BudgetInputs.css"

function BudgetInputs(){
    return(
        <div id="divInputs">
            
            <input type="number" id="valueInput"></input>
            
            <input type="date" id="renovationInput"></input>
            
            <select id="categoriesSelect">
                <option value="Alimentation">Alimentação</option>
                <option value="ExitExchang">Câmbio saída</option>
                <option value="Bill">Contas</option>
                <option value="Donation">Doações</option>
                <option value="Education">Educação</option>
                <option value="Tax">Imposto</option>
                <option value="Investiment">Investimento saída</option>
                <option value="Leisure">Lazer</option>
                <option value="Mark">Mercado</option>
                <option value="Home">Moradia</option>
                <option value="Pet">Pets</option>
                <option value="Clothe">Roupas</option>
                <option value="Health">Saúde</option>
                <option value="Transport">Transporte</option>
                <option value="Travel">Viagem</option>
            </select>
        </div>
    )
}

export default BudgetInputs