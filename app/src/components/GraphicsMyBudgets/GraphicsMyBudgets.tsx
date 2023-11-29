import "./GraphicsMyBudgets.css" 
import {Pie} from "react-chartjs-2"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"
import TopicMyBudget from "../TopicMyBudget/TopicMyBudget"
Chart.register(ArcElement, Tooltip, Legend)

function GraphicsMyBudgets(props:{GraphicValues : Array<number>}){
    
    const data = {
        labels : ["teste 1", "teste2", "teste3", "teste4"], 
        datasets :  [{
            data : props.GraphicValues,
            backgroundColor : ["green", "yellow", "red", "blue"]
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
            <Pie data={data} style={{position: "absolute", width: "15vw", height: "15vw", top: "11vh", left:"4vw"}} options={options}/>
            <TopicMyBudget/>
        </div>
    )
}

export default GraphicsMyBudgets