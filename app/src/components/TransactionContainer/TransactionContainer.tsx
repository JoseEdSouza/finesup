import { useEffect, useRef, useState } from "react";
import "./TransactionContainer.css";
import TransactionController from "../../controllers/TransactionController";
import { Expense, Transaction } from "../../models/Transaction";
import TransactionComp from "../Transaction/Transaction";
import { ExpenseCategories, ExpenseCategory, RevenueCategories, RevenueCategory } from "../../models/Category";

function TransactionContainer() {
    const [list, setList] = useState<Transaction[]>([])
    const transactionController = new TransactionController()

    const effectRam = useRef(false)

    useEffect(() => {
        if (effectRam.current === false) {
            const fecthData = async () => {
                try {
                    const trasansactions = (await transactionController.getTransactionCollection()).getModels()
                    setList(trasansactions)                    
                } catch (error) {
                    console.log(error)
                }
            }
            fecthData()
            effectRam.current = true
        }
    }, [])

    const getCategoryById = (id: number, type: number): ExpenseCategory | RevenueCategory | null => {
        let categories: any;
        if (type === 0) {
            categories = ExpenseCategories;
        } else if (type === 1) {
            categories = RevenueCategories;
        } else {
            return null;
        }

        for (let prop in categories) {
            if (categories[prop].id === id) {
                console.log(prop);
                
                return categories[prop];
            }
        }
        return null;
    }
    console.log(list )


    const getType = (transaction: Object) => transaction instanceof Expense ? 0 : 1

    const createTrans = (): JSX.Element[] => {
        return (
            list.map((transac) => (<TransactionComp 
                date={transac.purchaseDate.toISOString()}
                description={transac.description} 
                transactionValue={transac.value} 
                transactionName={transac.name} 
                transactionType={getType(transac)} 
                category={getCategoryById(transac.categoryId, getType(transac))} 
                categoryPrint={getCategoryById(transac.categoryId, getType(transac))?.name ?? ""}/>))
        )
    }

    return (
        <section className="ContainerOfContainers">
            {
                createTrans()
            }
        </section>
    );
}

export default TransactionContainer;