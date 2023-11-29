import Frequency from "../../utils/Frequency"
import "./TransactionCreatePeriod.css"

function TransactionCreatePeriod(props:{ setPeriod:(num:Frequency) => void}) {
    return (
        <div id="transactionCreatePeriod">
            <label id="transactionPeriodLabel"><strong>Período</strong></label>
            <select id="transactionPeriodSelect" onChange={(e) => props.setPeriod(+ e.target.value)}>
                <option value={Frequency.DAILY}>Diariamente</option>
                <option value={Frequency.WEEKLY}>Semanalmente</option>
                <option value={Frequency.MONTHLY}>Mensalmente</option>
                <option value={Frequency.BIMONTHLY}>Bimensalmente</option>
                <option value={Frequency.SEMIANNUAL}>Semestralmente</option>
                <option value={Frequency.ANNUAL}>Anualmente</option>
            </select>
        </div>
    )
}

export default TransactionCreatePeriod