import { ChangeEvent, useEffect, useState } from "react";
import NavBarDefault from "../NavBarDefault/NavBarDefault";
import "./CalculatorSelectorSimple.css"
import CalculatorResult from "../CalculatorResult/CalculatorResult";

function CalculatorSelectorSimple(){
    const [isResult, setIsResult] = useState<boolean>(false)
    const [isClear, setClear] = useState<number>(0)
    const [initialValue, setInitial] = useState<string | number>('')
    const [taxValue, setTax] = useState<string | number>('')
    const [periodValue, setPeriod] = useState<string | number>('')
    const [timeValue, setTime] = useState<string>('1')

    useEffect(() => {
        setInitial('')
        setTax('')
        setPeriod('')
        setTime('1')
        setIsResult(false)
    }, [isClear])

    const handleChangeInitial = (event:ChangeEvent<HTMLInputElement>) =>{
        setInitial(+ event.target.value)
    }

    const handleChangeTax = (event:ChangeEvent<HTMLInputElement>) =>{
        setTax(+ event.target.value)
    }

    const handleChangePeriod = (event:ChangeEvent<HTMLInputElement>) =>{
        setPeriod(+ event.target.value)
    }

    const handleChangeTime = (event:ChangeEvent<HTMLSelectElement>) =>{
        setTime(event.target.value)
    }

    function calcValueTotal(): string{
        return (Number(initialValue) + Number(calcTaxTotal())).toFixed(2)
    }

    function getValueInvest(): string{
        return (Number(initialValue)).toFixed(2)
    }

    function calcTaxTotal(): string{
        let initial = Number(initialValue)
        let period = Number(periodValue)
        let tax = Number(taxValue)

        if(timeValue === '1'){
            return ((initial * (tax / 100)) * 12 * period).toFixed(2)
        }
        else if(timeValue === '2'){
            return ((initial * (tax / 100)) * period).toFixed(2)
        }
        return ((initial * (tax / 100)) * (period / 30)).toFixed(2)
    }
    
    return(
        <>
            <NavBarDefault name="Calculadora de Juros Simples"/>
            <div id="container">
                <label id="labelInitial"><strong>Valor Inicial</strong></label>
                <input type="number" id="numberInput" value={initialValue} onChange={handleChangeInitial}></input>

                <label id="labelFees"><strong>Taxa de Juros em Meses</strong></label>
                <input type="number" id="feesInput" value={taxValue} onChange={handleChangeTax}></input>

                <label id="labelPeriod"><strong>Periodo em</strong></label>
                <input type="number" id="periodInput" value={periodValue} onChange={handleChangePeriod}></input>

                <select id="anosSelect" value={timeValue} onChange={handleChangeTime}>
                    <option value={"1"}>anos</option>
                    <option value={"2"}>meses</option>
                    <option value={"3"}>dias</option>
                </select>

                <label id="labelClear" onClick={() => setClear(isClear + 1)}>Limpar</label>
                <button id="buttonCalculate" onClick={() => setIsResult(true)}>Calcular</button>
            </div>
            {isResult ? <CalculatorResult total={calcValueTotal()} invest={getValueInvest()} tax={calcTaxTotal()}/> : <></>}
        </>
    );
}

export default CalculatorSelectorSimple;