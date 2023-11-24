import Category from "../components/Category/Category";
import "./Categories.css";

function CategoryRevenue(){
    return(
        <>
            <div className="ContainerRevenues">
                <Category typeIcon="cashbackCategory" icon="/icon_cashback.svg" label="Cashback"/>
                <Category typeIcon="salesCategory" icon="/icon_sales.svg" label="Vendas"/>
                <Category typeIcon="bonusCategory" icon="/icon_bonus.svg" label="Bônus"/>
                <Category typeIcon="reversalCategory" icon="/icon_reversal.svg" label="Estorno"/>
                <Category typeIcon="incomeCategory" icon="/icon_income.svg" label="Renda"/>
                <Category typeIcon="performanceCategory" icon="/icon_performance.svg" label="Rendimento"/>
                <Category typeIcon="balanceCorrectionCategory" icon="/icon_balanceCorrection.svg" label="Correção do Saldo"/>
                <Category typeIcon="investmentCategory" icon="/icon_investment.svg" label="Investimento entrada"/>
                <Category typeIcon="exchangeCategory" icon="/icon_exchange.svg" label="Câmbio entrada"/>
                <Category typeIcon="entryOthersCategory" icon="/icon_entryOthers.svg" label="Outras Entradas"/>
            </div>
        </>
    );
}

export default CategoryRevenue;