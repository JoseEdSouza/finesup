import { ChangeEvent, useState } from "react"
import "./TransactionCreateRepeat.css"

function TransactionCreateRepeat(props: { setRepeat: (repeat: boolean) => void, setNumRepeat:(num:number) => void, setInfinty:(inf:string) => void}) {
    const [value, setValue] = useState(false)
    const [repeat, setRepeat] = useState(true)

    const handlerepeat = () =>{
        setRepeat(!repeat)
        props.setRepeat(repeat)
        props.setInfinty("")
    }

    const handleNumber = (e:ChangeEvent<HTMLInputElement>) =>{
        props.setNumRepeat(+ e.target.value)
        props.setInfinty("")
    }
    return (
        <div id="transactionCreateRepeat">
            <label id="transactionRepeatLabel"><strong>Repetir</strong></label>
            <input type="checkbox" style={{ position: "absolute", height: "3vh", width: "3vw", cursor: "pointer", left: "7vw", top: "0.3vh" }} onClick={handlerepeat} />
            {value === false ?
                <input type="number" id="transactionRepeatInput" placeholder="0 ou mais vezes" onChange={handleNumber}/>
                : <input type="text" id="transactionRepeatInput" value={"Infinitamente"} onChange={() => props.setInfinty("infinity")}/>
            }
            {repeat === true ?
                <></>
                :
                <div id="infinitlyContainer">
                    <input type="checkbox" id="checkboxInfinitely" onChange={(e) => setValue(e.target.checked)} />
                    <label id="labelInfinitely">Repetir Infinitamente</label>
                </div>
            }
        </div>
    )
}

export default TransactionCreateRepeat