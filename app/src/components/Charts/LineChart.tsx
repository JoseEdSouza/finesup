import { Line } from "react-chartjs-2"
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js"
import { useEffect } from "react"

Chart.register(LineElement, CategoryScale, LinearScale, PointElement)

function LineChart(props:{labels:Array<string>, revenueData:Array<number>, expenseData:Array<number>, onValues:(e:{revenue:number, expense:number}) => void}){
    
    let salaryData = []
    let expenseSum = 0
    let revenueSum = 0
    let flag = false

    for(let i = 0; i < props.revenueData.length; ++i){
        salaryData.push(props.revenueData[i] - props.expenseData[i])
        revenueSum += props.revenueData[i]
        expenseSum += props.expenseData[i]

        if(i === props.revenueData.length - 1){
            flag = true
        }
        else{
            flag = false
        }
    }

    useEffect(()=>{
        props.onValues({revenue: revenueSum, expense: expenseSum})
    },[flag])
    
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
    const options = {
        plugins:{
            legend:{
                display:false
            }
        }
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
        } options={options}/>
    )
}

export default LineChart