import "./Balance.css";

function Balance(){
    return(
        <div className="Balance">
            <strong>
                <label id="Balance1">Saldo atual</label><br/>
                <label id="BalanceValue1">R$ 32000,00</label><br/>
                <label id="Balance2">Saldo mensal: </label>
                <label id="BalanceValue2">R$ 0,00</label>
            </strong>
        </div>
        
    );
}

export default Balance;