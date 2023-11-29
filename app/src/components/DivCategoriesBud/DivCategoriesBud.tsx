import { useEffect, useRef, useState } from "react";
import BudgetController from "../../controllers/BudgetController";
import BudgetClass from "../../models/Budget";
import Budget from "../Budget/Budget";

function DivCategoriesBud(){
    const [budgetlist, setbudgetlist] = useState<JSX.Element[]>()
    const controllerBudget = new BudgetController()
    const effectRam = useRef(false)
    const [alertbudget,setalertbudgetlist] = useState(false)

    const Fetchdata = async () => {
        try {
            const auxiliar = await controllerBudget.getAll()
            const listaBudget = auxiliar.map((e) => createBudget(e))
            setbudgetlist(listaBudget)
            setalertbudgetlist(true)
        } catch (error) {
            console.log(error)
        }
    }

    const createBudget = (budget: BudgetClass) => {
        return(
            <></>
        )
    }

    useEffect(() => {
        if(!effectRam.current){
            Fetchdata()
            effectRam.current = true
        }
    },[])

    return(
        <>
            {
                alertbudget ?

            <div id="divCategorieBud">
                {budgetlist}
            </div>
            : <label id="alertMessage">Não possui budget</label>
            }
        </>
    )
}

export default DivCategoriesBud