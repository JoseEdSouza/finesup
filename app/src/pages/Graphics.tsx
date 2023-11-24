import { useState } from "react"
import DateDisplay from "../components/DateDisplay/DateDisplay"
import GraphicDetails from "../components/GraphicDetails/GraphicDetails"
import GraphicsContainer from "../components/GraphicsContainer/GraphicsContainer"
import NavBarDefault from "../components/NavBarDefault/NavBarDefault"

function Graphics() {
    const [chartType, setChartType] = useState(0)
    const [typePieChart, setTypePieChart] = useState<number>(0)

    const handleChartType = (e: number) => {
        setChartType(e)
    }

    const handlePieChartType = (e: number) => {
        setTypePieChart(e)
    }
    
    return (
        <>
            <NavBarDefault name="Gráficos" backTo="0" />
            <DateDisplay/>
            <GraphicsContainer setChartType={handleChartType} setPieChartType={handlePieChartType} />
            <GraphicDetails chartType={chartType} pieChartType={typePieChart}/>
        </>
    )
}

export default Graphics