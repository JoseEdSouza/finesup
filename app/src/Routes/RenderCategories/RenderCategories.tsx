import { useState } from "react";
import "./RenderCategories.css";
import CategoryExpense from "../../pages/CategoryExpense";
import CategoryRevenue from "../../pages/CategoryRevenue";

function RenderCategories(){
    const [categoryType, setType] = useState(0);
    
    const setTypeRevenue = () => {
        setType(0)
    }

    const setTypeExpense = () => {
        setType(1)
    }

    return(
        <>
            {categoryType === 0 ? <CategoryExpense/>:<CategoryRevenue/>}
            <div id="link">
                <label id="entry" className={categoryType === 1 ? "Active" : "Inactive"} onClick={setTypeExpense}>
                    Entrada
                    <div id={categoryType === 1 ? "select" : ""}></div>
                </label>
                <label id="out" className={categoryType === 0 ? "Active" : "Inactive"} onClick={setTypeRevenue}>
                    Saída
                    <div id={categoryType === 0 ? "select" : ""}></div>
                </label>
            </div>
        </>
    );
}

export default RenderCategories;