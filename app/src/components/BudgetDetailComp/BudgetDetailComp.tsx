import { Link } from "react-router-dom"
import "./BudgetDetailComp.css"
import Transaction from "../Transaction/Transaction"
import ProgressBar from "../ProgressBar/ProgressBar"

function BudgetDetailComp(props: { name: string; valueCurrent: number; valueMax: number }){
    return(
        <>
            <div id="DivBar">
                <ProgressBar
                    valueCurrent={props.valueCurrent}
                    valueMax={props.valueMax}
                    progress={0}
                    width={49.72}
                    height={6.25}
                    top={20.84}
                    backgroundStyle="var(--secondaryColor)"
                    labelStyle=""
                />
            </div>

            <div id="editDiv">
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/> 
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/>
                <Transaction transactionType={1} transactionValue={900} transactionName="Pizza" category="Alimentation" description="Descriçaõ Teste" date={new Date(14-12-2004)}/> 
            </div>

            <div id="editDiv2">
                <Link to = "/3/budgetedit"><img src="/icon_edit.svg" className="EditBud"/> </Link>
            </div>
        </>
    )
}

export default BudgetDetailComp