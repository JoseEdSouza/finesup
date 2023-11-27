import { useLocation } from "react-router-dom"
import CreateButtons from "../CreateButtons/CreateButtons"
import BoxDescriptionEditable from "../BoxDescriptionEditable/BoxDescriptionEditable"
import BoxNameEditable from "../BoxNameEditable/BoxNameEditable"
import BoxValueEditable from "../BoxValueEditable/BoxValueEditable"
import "./BoxEditableContainer.css"
import { useEffect, useRef, useState } from "react"
import BoxController from "../../controllers/BoxController"
import Box from "../../models/Box"

function BoxEditableContainer() {
    const location = useLocation()
    const data = location.state

    // useStates for older box
    const [nameBox, setNameBox] = useState('')
    const [valueBox, setValueBox] = useState(0)
    const [descriptionBox, setDescriptionBox] = useState('')

    // useStates for box update
    const [nameNewBox, setNameNewBox] = useState('')
    const [valueNewBox, setValueNewBox] = useState(0)
    const [descriptionNewBox, setDescriptionNewBox] = useState('')

    const [activaded, setActivaded] = useState(false)

    const boxController = new BoxController()

    const refLoadDatas = useRef(false)

    useEffect(() => {
        if(refLoadDatas.current === false){
            const loadDatas = async () => {
                try {
                    const actualBox = await boxController.get(data.name)
                    setNameBox(actualBox.name)
                    setValueBox(actualBox.finalValue)
                    setDescriptionBox(actualBox.description)
                } catch (error) {
                    console.log(error)
                }
            }
            loadDatas()
            refLoadDatas.current = true
        }
    }, [])

    useEffect(() => {
        const setUpdate = async () => {
            try {
                
            } catch (error) {

            }
        }
    }, [activaded])

    return (
        <div id="editableBoxContainer">
            <BoxNameEditable boxNameCurrent={nameBox} setName={setNameNewBox} />
            <BoxValueEditable valueMax={valueBox} setValue={setValueNewBox} />
            <BoxDescriptionEditable descriptionCurrent={descriptionBox} setDescription={setDescriptionNewBox} />
            <CreateButtons nameButton="Editar caixinha" backTo="/1" buttonClick={setActivaded} />
        </div>
    )
}

export default BoxEditableContainer