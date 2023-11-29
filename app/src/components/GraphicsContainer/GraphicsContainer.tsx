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
                            data={[898, 1009, 31]}
                            othersValues={[239, 3290, 45]}
                            colors={["#EBEE61", "#70B6F6", "#CC2E2E"]}
                            othersColor={["#CC2E43", "#F7FFA1", "#AD3D3D"]}
                            display={display}/>
                        : display === 1
                            ? <BarChart
                                labels={['alimentação', 'lazer', 'roupas', 'saúde', 'doação', 'viagem', 'pets']}
                                data={[3, 40, 5, 10, 14, 1, 29]}
                                colors={["#CC2E43", "#F7FFA1", "#70B6F6", "#FF6928", "#AD3D3D", "#C728F", "#2D28FF"]} />
                            : <LineChart
                                // labels={['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']}
                                labels={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']}
                                revenueData={[3, 40, 5, 100, 14, 18, 29, 3, 40, 5, 100, 14, 18, 29, 3, 40, 5, 100, 14, 18, 29, 50, 33, 29, 3, 40, 5, 100, 14, 18]}
                                expenseData={[1, 20, 4, 20, 19, 1, 29.78, 3, 40, 5, 10, 14, 1, 29, 3, 40, 5, 10, 14, 1, 29, 12, 32, 5, 10, 14, 1, 29, 12, 32]}
                                onValues={(e: { revenue: number, expense: number }) => setValuesTransactions(e)} />
                }
                {display === 0 ? <DisplayReveneExpense setTypeTransactions={handleTypePieChart} bottom="2.69"/> : display === 2 ? <LineChartValues valuesTransaction={{revenue: 229.75, expense:103.5}} /> : <></>}
            </div>
        </>
    )
}

export default GraphicsContainer