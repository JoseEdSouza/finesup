import { useState } from "react"
import "./DateDisplay.css"
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

function DateDisplay() {
    let date = new Date()
    
    const [year, setYear] = useState(date.getFullYear())
    
    const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]
    
    const [monthDisplay, setMonthDisplay] = useState({
        monthPrev: months[date.getMonth() - 1],
        monthSelect: months[date.getMonth()],
        monthNext: months[date.getMonth() + 1]
    })

    const [indexs, setIndexs] = useState({
        iPrev: date.getMonth() - 1,
        iSelected: date.getMonth(),
        iNext: date.getMonth() + 1
    })

    const handlePrevMonth = () =>{
        let prev = indexs.iPrev - 1
        let selected = indexs.iSelected - 1
        let next = indexs.iNext - 1

        if(prev < 0){
            prev = 11
        }        
        else if(selected < 0){
            selected = 11
            setYear(year - 1)
        }        
        else if(next < 0){
            next = 11
        }

        setMonthDisplay({
            monthPrev: months[prev],
            monthSelect: months[selected],
            monthNext: months[next]
        })

        setIndexs({
            iPrev: prev,
            iSelected: selected,
            iNext: next
        })
    }

    const handleNextMonth = () =>{
        let prev = indexs.iPrev + 1
        let selected = indexs.iSelected + 1
        let next = indexs.iNext + 1

        if(prev > 11){
            prev = 0
        }        
        else if(selected > 11){
            selected = 0
            setYear(year + 1)
        }        
        else if(next > 11){
            next = 0
        }

        setMonthDisplay({
            monthPrev: months[prev],
            monthSelect: months[selected],
            monthNext: months[next]
        })

        setIndexs({
            iPrev: prev,
            iSelected: selected,
            iNext: next
        })
    }
    
    return (
        <div id="DateDisplay">
            <div id="displayYear">
                <label id="year"><strong>{year}</strong></label>
            </div>
            <div id="prevMonth" onClick={handlePrevMonth}>
                <IoIosArrowBack id="arrowBack"/>
            </div>
            <div id="dateContainer">
                <label id="month1">{monthDisplay.monthPrev}</label>
                <label id="month2"><strong>{monthDisplay.monthSelect}</strong></label>
                <label id="month3">{monthDisplay.monthNext}</label>
            </div>
            <div id="nextMonth" onClick={handleNextMonth}>
                <IoIosArrowForward id="arrowForward"/>
            </div>
        </div>
    )
}

export default DateDisplay