import { ChangeEvent, useEffect, useState} from "react";
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import NavBarDefault from "../NavBarDefault/NavBarDefault";
import "./CalculatorSelectorCompound.css"

function CalculatorSelectCompound(){
    
    const [countClear, setCountClear] = useState(0)
    const [isResult, setIsResult] = useState(false)
    const [initialValue, setInitialValue] = useState<number | string>()
    const [monthlyValue, setMonthlyValue] = useState<number | string>()
    const [periodValue, setPeriodValue] = useState<number | string>()
    const [taxValue, setTaxValue] = useState<number | string>()
    const [timeValue, setTimeValue] = useState<string>("1")

    useEffect(() => {
        setInitialValue('')
        setMonthlyValue('')
        setPeriodValue('')
        setTaxValue('')
        setTimeValue("1")
        setIsResult(false)
    }, [countClear])

    

    const handleChangeInitial = (event:ChangeEvent<HTMLInputElement>) =>{
        setInitialValue(+ event.target.value)
    }

    const handleChangeMonthly = (event:ChangeEvent<HTMLInputElement>) =>{
        setMonthlyValue(+ event.target.value)
    }

    const handleChangePeriod = (event:ChangeEvent<HTMLInputElement>) =>{
        setPeriodValue(+ event.target.value)
    }

    const handleChangeTax = (event:ChangeEvent<HTMLInputElement>) =>{
        setTaxValue(+ event.target.value)
    }

    const handleChangeTime = (event:ChangeEvent<HTMLSelectElement>) =>{
        setTimeValue(event.target.value)
    }

    function calcValueTotal() : string{
        return (Number(calcTaxTotal()) + Number(calcValueInvest())).toFixed(2)
    }

    function calcValueInvest() : string{
        let initial = Number(initialValue)
        let period = Number(periodValue)
        let monthly = Number(monthlyValue)

        if(timeValue === "1"){
            return (initial + (12 * period * monthly)).toFixed(2)
        }
        else if(timeValue === "2"){
            return (initial + (period * monthly)).toFixed(2)
        }
        return (initial + ((period)/30 * monthly)).toFixed(2)
    }

    function calcTaxTotal() : string{
        let initial = Number(initialValue)
        let monthly = Number(monthlyValue)
        let period = Number(periodValue)
        let tax = Number(taxValue)

        if(timeValue === "1"){
            return ((initial+monthly) * ((1 + (tax)/100)**(12*period)) - (initial+monthly*(12*(period+1)))).toFixed(2)
        }
        else if(timeValue === "2"){
            return ((initial+monthly) * ((1 + (tax)/100)**period) - (initial+monthly*(period+1))).toFixed(2)
        }
        return ((initial+monthly) * ((1 + (tax)/100)**(period)/30) - (initial+monthly*((period+1)/30))).toFixed(2)
    }

    return(
        <>
            <NavBarDefault name="Calculadora de Juros Compostos" backTo="1"/>
            <div id="containerCompound">
                <label id="labelInitialCompound" ><strong>Valor Inicial</strong></label>
                <input type="number" id="numberInputCompound" onChange={handleChangeInitial} value={initialValue}></input>
                
                <label id="labelFeesCompound"><strong>Valor Mensal</strong></label>
                <input type="number" id="feesInputCompound" onChange={handleChangeMonthly} value={monthlyValue}></input>
                
                <label id="labelPeriodCompound"><strong>Periodo em</strong></label>
                <input type="number" id="periodInputCompound" onChange={handleChangePeriod} value={periodValue}></input>
                
                <label id="labelTaxCompound"><strong>Taxas de Juros em Meses</strong></label>
                <input type="number" id="taxInputCompound" onChange={handleChangeTax} value={taxValue}></input>
                
                <select id="anosSelectCompound" onChange={handleChangeTime} value={timeValue}>
                    <option value={"1"}>anos</option>
                    <option value={"2"}>meses</option>
                    <option value={"3"}>dias</option>
                </select>
                
                <label id="labelClearCompound" onClick={() => setCountClear(countClear+1)}>Limpar</label>
                <button id="buttonCalculateCompound" onClick={() => setIsResult(true)}>Calcular</button>
            </div>
            {isResult ? <CalculatorResult total={calcValueTotal()} invest={calcValueInvest()} tax={calcTaxTotal()}/> : <></>}
        </>
    );
}

export default CalculatorSelectCompound;