import { useLocation } from "react-router-dom"
import CreateButtons from "../CreateButtons/CreateButtons"
import BoxDescriptionEditable from "../BoxDescriptionEditable/BoxDescriptionEditable"
import BoxNameEditable from "../BoxNameEditable/BoxNameEditable"
import BoxValueEditable from "../BoxValueEditable/BoxValueEditable"
import "./BoxEditableContainer.css"
import { useEffect, useRef, useState } from "react"
import BoxController from "../../controllers/BoxController"
import Box from "../../models/Box"
import { Nullable } from "../../types"

function BoxEditableContainer() {
    const location = useLocation()
    const data = location.state

    // useStates for older box
    const [nameBox, setNameBox] = useState('')
    const [valueBox, setValueBox] = useState(0)
    const [descriptionBox, setDescriptionBox] = useState('')
    const [descriptionBox2, setDescriptionBox2] = useState('')
    const [activaded, setActivaded] =useState(false)

    const [getData, setData] = useState<Nullable<Box>>(null)

    const boxController = new BoxController()

    const refLoadDatas = useRef(false)

    useEffect(() => {
        if (refLoadDatas.current === false) {
            const loadDatas = async () => {
                try {
                    const box = await boxController.get(data.name)
                    setData(box)
                    setNameBox(box.name)
                    setValueBox(box.finalValue)
                    setDescriptionBox(box.description)
                    console.log(nameBox)
                } catch (error) {
                    console.log(error)
                }
            }
            loadDatas()
            refLoadDatas.current = true
        }
    }, [])

    return (
        <div id="editableBoxContainer">
            <BoxNameEditable boxNameCurrent={nameBox} setName={setNameBox} />
            <BoxValueEditable valueMax={valueBox} setValue={setValueBox} />
            <BoxDescriptionEditable descriptionCurrent={descriptionBox} setDescription={setDescriptionBox2} />
        </div>
    )
}

export default BoxEditableContainer