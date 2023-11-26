import "./TransactionButton.css";

function TransactionButton() {
    return (
        <div id="buttonTransaction">
            <div id="buttonTransactionGroup">
                <img src="/icon_transaction.svg" id="iconTransaction" />
                <label id="labelButtonTransaction">Novos lançamentos</label>
            </div>
        </div>
    )
}

export default TransactionButton