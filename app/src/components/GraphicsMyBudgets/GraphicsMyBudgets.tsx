import "./GraphicsMyBudgets.css" 
import {Pie} from "react-chartjs-2"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"
Chart.register(ArcElement, Tooltip, Legend)

function GraphicsMyBudgets(props:{GraphicValues : Array<number>}){
    
    const data = {
        labels : ["teste 1", "teste2"], 
        datasets :  [{
            data : props.GraphicValues,
            backgroundColor : ["green", "yellow"]
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
        <div style={{position: "absolute", height: "15vw", width: "15vw", top:"15vh"}}>
            <Pie data={data} style={{position: "absolute", width: "15vw", height: "15vw"}} options={options}/>
        </div>
    )
}

export default GraphicsMyBudgets