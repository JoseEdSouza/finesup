import { useEffect, useRef, useState } from "react";
import CreateBox from "../CreateButtons/CreateButtons";
import BoxDescriptionInput from "../BoxDescriptionInput/BoxDescriptionInput";
import BoxNameInput from "../BoxNameInput/BoxNameInput";
import BoxValueInput from "../BoxValueInput/BoxValueInput";
import BoxController from "../../controllers/BoxController";
import { useNavigate } from "react-router-dom";
import "./BoxCreateContainer.css"

function BoxCreateContainer() {
    const [nameBox, setNameBox] = useState<string>("")
    const [valueBox, setValueBox] = useState<number>(0)
    const [descriptionBox, setDescriptionBox] = useState<string>("")

    const boxController = new BoxController()

    const createBox = () => boxController.addBox(nameBox,descriptionBox,valueBox)

    return (
        <div id="createBoxContainer">
            <BoxNameInput onSubmit={setNameBox} />
            <BoxValueInput onSubmit={setValueBox} />
            <BoxDescriptionInput onSubmit={setDescriptionBox} />
            <CreateBox nameButton="Criar Caixinha" backTo="/1" functionOnCreate={createBox} />
        </div>
    )
}

export default BoxCreateContainer