import { MagicMotion } from "react-magic-motion";
import Category from "../components/Category/Category";
import NavBar from "../components/NavBar/NavBar";
import RenderingCategories from "../Routes/RenderCategories/RenderCategories";
import "./Categories.css";

function CategoryExpense(){
    return(
        <>
            <MagicMotion>
                <div className="Container">
                    <Category typeIcon="alimentation" icon="./icon_alimentation.svg" label="Alimentação"/>
                    <Category typeIcon="leisure" icon="./icon_leisure.svg" label="Lazer"/>
                    <Category typeIcon="clothes" icon="./icon_clothes.svg" label="Roupas"/>
                    <Category typeIcon="market" icon="./icon_market.svg" label="Mercado"/>
                    <Category typeIcon="transport" icon="./icon_transport.svg" label="Transporte"/>
                    <Category typeIcon="health" icon="./icon_health.svg" label="Saúde"/>
                    <Category typeIcon="travel" icon="./icon_travel.svg" label="Viagem"/>
                    <Category typeIcon="pets" icon="./icon_pets.svg" label="Pets"/>
                    <Category typeIcon="home" icon="./icon_home.svg" label="Moradia"/>
                    <Category typeIcon="accounts" icon="./icon_accounts.svg" label="Contas"/>
                    <Category typeIcon="donation" icon="./icon_donation.svg" label="Doações"/>
                    <Category typeIcon="education" icon="./icon_education.svg" label="Educação"/>
                    <Category typeIcon="tax" icon="./icon_tax.svg" label="Imposto"/>
                    <Category typeIcon="investment" icon="./icon_investment.svg" label="Investimento saída"/>
                    <Category typeIcon="exchange" icon="./icon_exchange.svg" label="Câmbio saída"/>
                    <Category typeIcon="exitOthers" icon="./icon_exitOthers.svg" label="Outras Saídas"/>
                </div>
            </MagicMotion>
        </>
    );
}

export default CategoryExpense;