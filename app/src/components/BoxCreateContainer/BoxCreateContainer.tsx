import { useEffect, useState } from "react";
import BoxCreateButtons from "../CreateButtons/CreateButtons";
import BoxDescriptionInput from "../BoxDescriptionInput/BoxDescriptionInput";
import BoxNameInput from "../BoxNameInput/BoxNameInput";
import BoxValueInput from "../BoxValueInput/BoxValueInput";
import "./BoxCreateContainer.css";
import BoxController from "../../controllers/BoxController";
import { useNavigate } from "react-router-dom";

function BoxCreateContainer() {
    const [nameBox, setNameBox] = useState<string>('')
    const [valueBox, setValueBox] = useState<number>(0)
    const [descriptionBox, setDescriptionBox] = useState<string>('')
    const [isActivaded, setActivaded] = useState(false)
    const navigate = useNavigate()

    const boxController = new BoxController()
    const createBox = async () =>{
        try {
            await boxController.addBox(nameBox, descriptionBox, valueBox)
            navigate("/1", {replace: true})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(nameBox !== '' && valueBox !== 0 && descriptionBox !== ''){
            createBox()
        }
    }, [isActivaded])
    return (
        <div id="createBoxContainer">
            <BoxNameInput onSubmit={(e: string) => setNameBox(e)} />
            <BoxValueInput onSubmit={(e: number) => setValueBox(e)} />
            <BoxDescriptionInput onSubmit={(e: string) => setDescriptionBox(e)} />
            <BoxCreateButtons nameButton="Criar Caixinha" backTo="/1" buttonClick={(e) => setActivaded(e)}/>
        </div>
    )
}

export default BoxCreateContainer