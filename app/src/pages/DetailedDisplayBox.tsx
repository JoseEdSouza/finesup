import { useLocation } from "react-router-dom";
import BoxDetails from "../components/BoxDetails/BoxDetails";
import BoxProgressDetails from "../components/BoxProgressDetails/BoxProgressDetails";
import NavBarDefault from "../components/NavBarDefault/NavBarDefault";
import { useEffect, useRef, useState } from "react";
import BoxController from "../controllers/BoxController";
import Box from "../models/Box";

function DetailedDisplayBox() {
    const location = useLocation();
    const data = location.state;
    const [box, setBox] = useState<Box>()
    const [actualValue, setActualValue] = useState(0)
    const [finalalValue, setFinalValue] = useState(0)
    const [description, setDescription] = useState('')

    const boxController = new BoxController()

    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current === false) {
            const fecthData = async () => {
                try {
                    const box = await boxController.get(data.name)
                    setBox(box)
                    setActualValue(box.actualValue === null ? 0 : box.actualValue)
                    setFinalValue(box.finalValue === null ? 0 : box.finalValue)
                    setDescription(box.description)
                } catch (error) {
                    console.log(error)
                }
            }
            fecthData()
            effectRan.current = true
        }
    }, [])

    const deposit = async (num: number) => {
        try {
            const newBox = await boxController.deposit(data.name, num)
            setBox(newBox)
            setActualValue(newBox.actualValue === null ? 0 : newBox.actualValue)
        } catch (error) {
            console.log(error)
        }
    }

    const draw = async (num: number) => {
        try {
            const newBox = await boxController.withdraw(data.name, num)
            setBox(newBox)
            setActualValue(newBox.actualValue === null ? 0 : newBox.actualValue)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <NavBarDefault name="Caixinha" backTo="2" />
            <BoxProgressDetails
                name={box?.name}
                valueCurrent={actualValue}
                valueMax={finalalValue}
            />
            <BoxDetails
                name={box?.name}
                valueMax={finalalValue}
                description={description}
                currentValue={actualValue}
                deposit={deposit}
                draw={draw}
                controller={boxController}
            />
        </>
    );
}

export default DetailedDisplayBox;
