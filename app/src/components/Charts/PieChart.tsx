import { Pie } from "react-chartjs-2"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"

Chart.register(ArcElement, Tooltip, Legend)

function PieChart(props:{labels:Array<string>, data:Array<number>, colors:Array<string>}) {
    const data={
        labels: props.labels,
        datasets:[{
            labels: 'testando papai',
            data: props.data,
            backgroundColor: props.colors,
            borderWidth: 0,
            borderColor: 'black',
            fill: true
        }]
    }
    
    return (
        <Pie data={data} style={
            {
                position: "absolute", 
                height: "39.45vh", 
                maxHeight: "350px",
                width: "6vw", 
                maxWidth: "500px", 
                left: "50%",
                transform: "translateX(-50%)"
            }
        }/>
    )
}

export default PieChart