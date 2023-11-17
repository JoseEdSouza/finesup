import { useState } from "react"
import LineChart from "../Charts/LineChart"
import GraphicsDisplay from "../GraphicsDisplay/GraphicsDisplay"
import "./GraphicsContainer.css"
import PieChart from "../Charts/PieChart"
import BarChart from "../Charts/BarChart"
import LineChartValues from "../LineChartValues/LineChartValues"
import DisplayReveneExpense from "../DisplayReveneExpense/DisplayReveneExpense"
import DateDisplay from "../DateDisplay/DateDisplay"

function GraphicsContainer() {
    const [display, setDisplay] = useState(0)

    const handleChange = (e:number) =>{
        setDisplay(e)
    }
    return (
        <>
            <DateDisplay/>
            <div id="graphicsContainer">
                <GraphicsDisplay setChange={handleChange}/>
                {
                    display === 0 
                        ? <PieChart  
                            labels={['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7']} 
                            data={[3, 40, 5, 10, 14, 1, 29]} 
                            colors={["red", "blue", "yellow", "green", "orange", "violet", "pink"]}/>
                    : display === 1 
                        ? <BarChart 
                            labels={['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7']} 
                            data={[3, 40, 5, 10, 14, 1, 29]} 
                            colors={["red", "blue", "yellow", "green", "orange", "violet", "pink"]}/>
                        : <LineChart 
                            labels={['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7']} 
                            revenueData={[3, 40, 5, 100, 14, 18, 29]}
                            expenseData={[1, 20, 4, 20, 19, 1, 29]}/>
                }
                {display === 0 ? <DisplayReveneExpense/> : display === 2 ? <LineChartValues /> : <></>}
            </div>
        </>
    )
}

export default GraphicsContainer