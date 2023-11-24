import "./TransactionCreateCategory.css"

function TransactionCreateCategory(props: { categoryType: number }) {
    return (
        <div id="transactionCreateCategory">
            <label id="transactionCategoryLabel"><strong>Categoria</strong></label>
            {props.categoryType === 0 ?
                <select id="transactionSelectCategories">
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
                : <select id="transactionSelectCategories">
                    <option value="Cashback">Cashback</option>
                    <option value="Sales">Vendas</option>
                    <option value="Bonus">Bônus</option>
                    <option value="Reversal">Estorno</option>
                    <option value="Income">Renda</option>
                    <option value="Performance">Rendimento</option>
                    <option value="BalanceCorrection">Correção do Saldo</option>
                    <option value="Investment">Investimento entrada</option>
                    <option value="Exchange">Câmbio entrada</option>
                    <option value="EntryOthers">Outras Entradas</option>
                </select>
            }
        </div>
    )
}
export default TransactionCreateCategory