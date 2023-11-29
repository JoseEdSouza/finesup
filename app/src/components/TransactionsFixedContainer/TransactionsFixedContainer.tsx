import { useEffect, useRef } from "react"
import TransactionComp from "../Transaction/Transaction"
import "./TransactionsFixedContainer.css"
import TransactionController from "../../controllers/TransactionController"
import { Transaction } from "../../models/Transaction"

function TransactionsFixedContainer() {

    const transactionController = new TransactionController()

    const effectRam = useRef(false)

    useEffect(() =>{
        if(effectRam.current === false){
            const fetchData = () =>{
                try {
                    
                } catch (error) {
                    
                }
            }
            fetchData()
            effectRam.current = true
        }
    },[])

    const createtransaction = (trans: Transaction) =>{
        return(
            <>
            
            </>
        )
    }

    return (
        <div id='transactionsFixedContainer'>
            <TransactionComp category="alimentation" transactionType={1} transactionName="Pizzaa" transactionValue={900} description="Pizza de peperoni" date="2023-11-29"/>
            <TransactionComp category="alimentation" transactionType={1} transactionName="Pizzaa" transactionValue={900} description="Pizza de peperoni" date="2023-11-29"/>
        </div>
    )
}

export default TransactionsFixedContainer