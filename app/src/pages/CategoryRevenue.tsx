import Category from "../components/Category/Category";
import NavBar from "../components/NavBar/NavBar";
import "./Categories.css";

function CategoryRevenue(){
    return(
        <>
            <NavBar name="Categorias"/>
            <div className="Container">
                <Category typeIcon="cashback" icon="./icon_cashback.svg" label="Cashback"/>
                <Category typeIcon="sales" icon="./icon_sales.svg" label="Vendas"/>
                <Category typeIcon="bonus" icon="./icon_bonus.svg" label="Bônus"/>
                <Category typeIcon="reversal" icon="./icon_reversal.svg" label="Estorno"/>
                <Category typeIcon="income" icon="./icon_income.svg" label="Renda"/>
                <Category typeIcon="performance" icon="./icon_performance.svg" label="Rendimento"/>
                <Category typeIcon="balanceCorrection" icon="./icon_balanceCorrection.svg" label="Correção do Saldo"/>
                <Category typeIcon="investment" icon="./icon_investment.svg" label="Investimento entrada"/>
                <Category typeIcon="exchange" icon="./icon_exchange.svg" label="Câmbio entrada"/>
                <Category typeIcon="entryOthers" icon="./icon_entryOthers.svg" label="Outras Saídas"/>
            </div>
        </>
    );
}

export default CategoryRevenue;