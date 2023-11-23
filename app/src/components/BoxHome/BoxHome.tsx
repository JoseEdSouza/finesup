import "./BoxHome.css"
import BoxIcon from "../../../public/boxIcon"
import ProgressBar from "../ProgressBar/ProgressBar"

function BoxHome(props: { name: string, valueCurrent: number, valueMax: number }) {
    let percent = Number(((props.valueCurrent / props.valueMax) * 100).toFixed(2))

    return (
        <div id="boxHome">
            <label id="boxHomeName">{props.name}</label>
            <BoxIcon width="7.01vw" height="8.86vh" />
            <strong style={{position: "absolute"}}>
                <label id="boxPercent">{percent}%</label>
            </strong>
            <ProgressBar valueCurrent={props.valueCurrent} valueMax={props.valueMax} labelStyle="var(--primaryColor)" progress={0} backgroundStyle="var(--primaryColor)" height={1.5} width={7} top={12.5}/>
        </div>
    )
}

export default BoxHome