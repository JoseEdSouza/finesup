import { Line } from "react-chartjs-2"
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js"

Chart.register(LineElement, CategoryScale, LinearScale, PointElement)

function LineChart(props:{labels:Array<string>, revenueData:Array<number>, expenseData:Array<number>}) {
    
    let salaryData = []

    for(let i = 0; i < props.revenueData.length; ++i){
        salaryData.push(props.revenueData[i] - props.expenseData[i])
    }

    
    const data={
        labels: props.labels,
        datasets:[{
            label: 'receitas',
            data: props.revenueData,
            backgroundColor: '#34A853',
            borderWidth: 3,
            borderColor: '#34A853',
            fill: true
        },
        {
            label: 'despesas',
            data: props.expenseData,
            backgroundColor: '#CB5151',
            borderWidth: 3,
            borderColor: '#CB5151',
            fill: true
        },
        {
            label: 'saldo',
            data: salaryData,
            backgroundColor: '#FBBC04',
            borderWidth: 3,
            borderColor: '#FBBC04',
            fill: true
        }        
        ]
    }
    
    return (
        <Line data={data} style={
            {
                position: "absolute", 
                maxHeight: "400px", 
                height: "39.45vh", 
                width: "40vw", 
                maxWidth: "750px", 
                left: "50%",
                transform: "translateX(-50%)"
            }
        }/>
    )
}

export default LineChart