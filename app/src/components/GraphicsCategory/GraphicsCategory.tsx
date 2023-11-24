import CategoriesColorsExpenses from "../../utils/CategoriesColorsExpense"
import CategoriesColorsRevenues from "../../utils/CategoriesColorsRevenues"
import "./GraphicsCategory.css"


function GraphicsCategory(props: { categoryType: string, category: string, value: number }) {

    let color: string | undefined
    if (props.categoryType === "revenue") {
        const keys = Object.keys(CategoriesColorsRevenues) as Array<keyof typeof CategoriesColorsRevenues>
        for (const key of keys) {
            if (key === props.category.toLocaleUpperCase()) {
                color = CategoriesColorsRevenues[key]
                break
            }
        }
    }
    else {
        const keys = Object.keys(CategoriesColorsExpenses) as Array<keyof typeof CategoriesColorsExpenses>
        for (const key of keys) {
            if (key === props.category.toLocaleUpperCase()) {
                color = CategoriesColorsExpenses[key]
                break
            }
        }
    }


    let icon = "/icon_" + props.category + ".svg"

    let value = props.categoryType === "revenue" ? "+" + props.value.toFixed(2) : "-" + props.value.toFixed(2)
    let colorValue = props.categoryType === "revenue" ? "#34A853" : "#CC2E43";

    return (
        <div id="graphicsCategory" >
            <img src={icon} id="graphicsCategoryIcon" style={{ backgroundColor: color }} />
            <label id="graphicsCategoryLabel"><strong>{props.category}</strong></label>
            <label id="graphicsCategoryValue" style={{ color: colorValue }}>{value}</label>
        </div>
    )
}

export default GraphicsCategory