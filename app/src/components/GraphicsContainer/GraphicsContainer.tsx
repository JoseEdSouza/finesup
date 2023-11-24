import { useEffect, useState } from "react"
import LineChart from "../Charts/LineChart"
import GraphicsDisplay from "../GraphicsDisplay/GraphicsDisplay"
import "./GraphicsContainer.css"
import PieChart from "../Charts/PieChart"
import BarChart from "../Charts/BarChart"
import LineChartValues from "../LineChartValues/LineChartValues"
import DisplayReveneExpense from "../DisplayReveneExpense/DisplayReveneExpense"

function GraphicsContainer(props: { setChartType: (chartType: number) => void, setPieChartType: (pieChartType: number) => void }) {
    const [display, setDisplay] = useState(0)
    const [typePieChart, setTypePieChart] = useState(0)
    const [valuesTransactions, setValuesTransactions] = useState({
        revenue: 0,
        expense: 0
    })

    const handleChange = (e: number) => {
        setDisplay(e)
        props.setChartType(e)
    }

    const handleTypePieChart = (e: number) => {
        setTypePieChart(e)
    }

    useEffect(() =>{
        props.setPieChartType(typePieChart)
    }, [typePieChart])
    return (
        <>
            <div id="graphicsContainer">
                <GraphicsDisplay setChange={handleChange} />
                {
                    display === 0
                        ? <PieChart
                            labels={['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7']}
                            data={[3, 40, 5, 10, 14, 1, 29]}
                            colors={["red", "blue", "yellow", "green", "orange", "violet", "pink"]} />
                        : display === 1
                            ? <BarChart
                                labels={['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7']}
                                data={[3, 40, 5, 10, 14, 1, 29]}
                                colors={["red", "blue", "yellow", "green", "orange", "violet", "pink"]} />
                            : <LineChart
                                // labels={['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']}
                                labels={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']}
                                revenueData={[3, 40, 5, 100, 14, 18, 29, 3, 40, 5, 100, 14, 18, 29, 3, 40, 5, 100, 14, 18, 29, 50, 33, 29, 3, 40, 5, 100, 14, 18]}
                                expenseData={[1, 20, 4, 20, 19, 1, 29.78, 3, 40, 5, 10, 14, 1, 29, 3, 40, 5, 10, 14, 1, 29, 12, 32, 5, 10, 14, 1, 29, 12, 32]}
                                onValues={(e: { revenue: number, expense: number }) => setValuesTransactions(e)} />
                }
                {display === 0 ? <DisplayReveneExpense setTypeTransactions={handleTypePieChart} /> : display === 2 ? <LineChartValues valuesTransaction={valuesTransactions} /> : <></>}
            </div>
        </>
    )
}

export default GraphicsContainer