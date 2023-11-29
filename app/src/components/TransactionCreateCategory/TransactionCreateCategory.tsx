import "./TransactionCreateCategory.css"

function TransactionCreateCategory(props: { categoryType: number, setCat:(cat:number) => void}) {
    return (
        <div id="transactionCreateCategory">
            <label id="transactionCategoryLabel"><strong>Categoria</strong></label>
            {props.categoryType === 0 ?
                <select id="transactionSelectCategories" onChange={(e) => props.setCat(+ e.target.value)}>
                    <option value="10">Outras Entradas</option>
                    <option value="1">Cashback</option>
                    <option value="2">Vendas</option>
                    <option value="3">Bônus</option>
                    <option value="4">Estorno</option>
                    <option value="5">Renda</option>
                    <option value="6">Rendimento</option>
                    <option value="7">Correção do Saldo</option>
                    <option value="8">Investimento entrada</option>
                    <option value="9">Câmbio entrada</option>
                </select>
                : <select id="transactionSelectCategories" onChange={(e) => {props.setCat(+ e.target.value)}}>
                    <option value="16">Outras Saídas</option>
                    <option value="1">Alimentação</option>
                    <option value="2">Lazer</option>
                    <option value="3">Roupas</option>
                    <option value="4">Mercado</option>
                    <option value="5">Transporte</option>
                    <option value="6">Saúde</option>
                    <option value="7">Viagem</option>
                    <option value="8">Pets</option>
                    <option value="9">Moradia</option>
                    <option value="10">Contas</option>
                    <option value="11">Doações</option>
                    <option value="12">Educação</option>
                    <option value="13">Imposto</option>
                    <option value="14">Investimento saída</option>
                    <option value="15">Câmbio saída</option>
                </select>
            }
        </div>
    )
}
export default TransactionCreateCategory