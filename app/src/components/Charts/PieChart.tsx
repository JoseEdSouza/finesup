import { Pie } from "react-chartjs-2"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"

Chart.register(ArcElement, Tooltip, Legend)

function PieChart(props: { data: Array<number>, colors: Array<string>, othersValues: Array<number>, othersColor: Array<string>, display: number }) {
    const data = {
        datasets: [{
            data: props.data,
            backgroundColor: props.colors,
            borderWidth: 0,
            borderColor: 'black',
            fill: true
        }],
    }

    const data2 = {
        datasets: [{
            data: props.othersValues,
            backgroundColor: props.othersColor,
            borderWidth: 0,
            borderColor: 'black',
            fill: true
        }],
    }
    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    const style: React.CSSProperties = {
        position: "absolute",
        height: "39.45vh",
        maxHeight: "330px",
        width: "6vw",
        maxWidth: "500px",
        left: "50%",
        transform: "translateX(-50%)"
    }

    return (
        <>
            {props.display === 0 ?
                <Pie data={data} style={style} options={options} />
                :
                <Pie data={data2} style={style} options={options} />
            }
        </>
    )
}

export default PieChart