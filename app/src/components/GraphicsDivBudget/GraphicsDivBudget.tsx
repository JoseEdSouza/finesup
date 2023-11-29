import {Pie} from "react-chartjs-2"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"
Chart.register(ArcElement, Tooltip, Legend)

function GraphicsDivBudget(props:{GraphicValues : Array<number>}){
    const data = {
        labels : ["teste 1", "teste2"], 
        datasets :  [{
            data : props.GraphicValues,
            backgroundColor : ["green", "grey"]
        }]
    }
    
    const options = {
        plugins : {
            legend : {
                display : false
            }
        }
    }

    return(
        <div style={{position: "absolute", width: "3.75vw", top:"5.46vh", left:"4,3vw"}}>
            <Pie data={data} style={{position: "absolute", width: "3.75vw", top: "5.46vhvh", left:"4.3vw", border:"none"}} options={options}/>
        </div>
    )
}

export default GraphicsDivBudget