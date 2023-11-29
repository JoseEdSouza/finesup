import { useLocation } from "react-router-dom"
import "./TransactionDetailed.css"

function TransactionDetailed() {
    const location = useLocation()
    const data = location.state
    return (
        <div id="transactionDetailed">
            <div id="detailedName">
                <label id="labelDeitaledTransactionName"><strong>Nome</strong></label>
                <input type="text" id="inputDeitaledTransactionName" value={data.name}/>
            </div>
            <div id="detailedDate">
                <label id="labelDeitaledTransactionDate"><strong>Data</strong></label>
                <input type="date" id="inputDeitaledTransactionDate" value={data.date}/>
            </div>
            <div id="detailedValue">
                <label id="labelDeitaledTransactionvalue"><strong>Valor</strong></label>
                <input type="number" id="inputDeitaledTransactionvalue" value={data.value}/>
            </div>
            <div id="detailedDescription">
                <label id="labelDeitaledTransactiondes"><strong>Descrição</strong></label>
                <textarea id="inputDeitaledTransactiondes" value={data.descriprion}/>
            </div>
            <div id="detailedcategory">
                <label id="labelDeitaledTransactioncat"><strong>Categoria</strong></label>
                <input type="text" id="inputDeitaledTransactioncat" value={data.category}/>
            </div>
        </div>
    )
}

export default TransactionDetailed