import { Bar } from "react-chartjs-2"
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"

Chart.register(BarElement, CategoryScale, LinearScale , Tooltip, Legend)

function BarChart(props:{labels:Array<string>, data:Array<number>, colors:Array<string>}) {
    const data={
        labels: props.labels,
        datasets:[{
            label: 'testando papai',
            data: props.data,
            backgroundColor: props.colors,
            borderColor: 'black',
            borderWidth: 0,
            fill: true
        }]
    }
    
    return (
        <Bar data={data} style={
            {
                position: "absolute", 
                maxHeight: "400px", 
                height: "39.45%", 
                width: "100%",
                left: "0%"
            }
        }/>
    )
}

export default BarChart