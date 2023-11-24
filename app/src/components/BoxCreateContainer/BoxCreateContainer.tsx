import { useState } from "react";
import BoxCreateButtons from "../CreateButtons/CreateButtons";
import BoxDescriptionInput from "../BoxDescriptionInput/BoxDescriptionInput";
import BoxNameInput from "../BoxNameInput/BoxNameInput";
import BoxValueInput from "../BoxValueInput/BoxValueInput";
import "./BoxCreateContainer.css";

function BoxCreateContainer() {
    const [nameBox, setNameBox] = useState<string>('')
    const [valueBox, setValueBox] = useState<number>(0)
    const [descriptionBox, setDescriptionBox] = useState<string>('')

    return (
        <div id="createBoxContainer">
            <BoxNameInput onSubmit={(e: string) => setNameBox(e)} />
            <BoxValueInput onSubmit={(e: number) => setValueBox(e)} />
            <BoxDescriptionInput onSubmit={(e: string) => setDescriptionBox(e)} />
            <BoxCreateButtons nameButton="Criar Caixinha" backTo="/1"/>
        </div>
    )
}

export default BoxCreateContainer