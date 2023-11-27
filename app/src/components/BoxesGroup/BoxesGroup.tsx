import { useEffect, useRef, useState } from "react";
import BoxController from "../../controllers/BoxController";
import BoxComp from "../Box/Box";
import "./BoxesGroup.css";
import { Link } from "react-router-dom";
import Box from "../../models/Box";

function BoxesGroup(props: { setSumAllActual: (value: number) => void, setSumAllFinal: (value: number) => void }) {
    const [boxList, setBoxList] = useState<JSX.Element[]>()

    const boxController = new BoxController()

    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current === false) {
            const fecthData = async () => {
                try {
                    const boxes = await boxController.getAll()
                    const boxesElements = boxes.map((box) => createBox(box))
                    setBoxList(boxesElements)

                    props.setSumAllActual(sumAllActualValue(boxes))
                    props.setSumAllFinal(sumAllFinalValue(boxes))
                } catch (error) {
                    console.log(error)
                }
            }
            fecthData()
            effectRan.current = true
        }
    }, [])

    const createBox = (box: Box) => {
        return (
            <BoxComp name={box.name} valueCurrent={box.actualValue} valueMax={box.finalValue} />
        )
    }

    const sumAllActualValue = (boxList: Box[]): number => {
        let sum = 0
        boxList.forEach((box) => {
            sum += box.actualValue
        })
        return sum
    }

    const sumAllFinalValue = (boxList: Box[]): number => {
        let sum = 0
        boxList.forEach((box) => {
            sum += box.finalValue
        })
        return sum
    }

    return (
        <div id="containerBoxes">
            {
                boxList
            }
            <Link to="/1/addBoxes">
                <button id="plus">
                    <img src="/plus_icon.svg" id="icon" />
                </button>
            </Link>
        </div>
    );
}

export default BoxesGroup;