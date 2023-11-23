import Category from "../components/Category/Category";
import "./Categories.css";

function CategoryExpense(){
    return(
        <>
            <div className="ContainerExpenses">
                <Category typeIcon="alimentationCategory" icon="/icon_alimentation.svg" label="Alimentação"/>
                <Category typeIcon="leisureCategory" icon="/icon_leisure.svg" label="Lazer"/>
                <Category typeIcon="clothesCategory" icon="/icon_clothes.svg" label="Roupas"/>
                <Category typeIcon="marketCategory" icon="/icon_market.svg" label="Mercado"/>
                <Category typeIcon="transportCategory" icon="/icon_transport.svg" label="Transporte"/>
                <Category typeIcon="healthCategory" icon="/icon_health.svg" label="Saúde"/>
                <Category typeIcon="travelCategory" icon="/icon_travel.svg" label="Viagem"/>
                <Category typeIcon="petsCategory" icon="/icon_pets.svg" label="Pets"/>
                <Category typeIcon="homeCategory" icon="/icon_home.svg" label="Moradia"/>
                <Category typeIcon="accountsCategory" icon="/icon_accounts.svg" label="Contas"/>
                <Category typeIcon="donationCategory" icon="/icon_donation.svg" label="Doações"/>
                <Category typeIcon="educationCategory" icon="/icon_education.svg" label="Educação"/>
                <Category typeIcon="taxCategory" icon="/icon_tax.svg" label="Imposto"/>
                <Category typeIcon="investmentCategory" icon="/icon_investment.svg" label="Investimento saída"/>
                <Category typeIcon="exchangeCategory" icon="/icon_exchange.svg" label="Câmbio saída"/>
                <Category typeIcon="exitOthersCategory" icon="/icon_exitOthers.svg" label="Outras Saídas"/>
            </div>
        </>
    );
}

export default CategoryExpense;