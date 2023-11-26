import "./TransactionCreatePeriod.css"

function TransactionCreatePeriod() {
    return (
        <div id="transactionCreatePeriod">
            <label id="transactionPeriodLabel"><strong>Período</strong></label>
            <select id="transactionPeriodSelect">
                <option value="Diariamente">Diariamente</option>
                <option value="Semanalmente">Semanalmente</option>
                <option value="Mensalmente">Mensalmente</option>
                <option value="Bimensalmente">Bimensalmente</option>
                <option value="Semestralmente">Semestralmente</option>
                <option value="Anualmente">Anualmente</option>
            </select>
        </div>
    )
}

export default TransactionCreatePeriod