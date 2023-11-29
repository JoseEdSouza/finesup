import { Link, useNavigate } from "react-router-dom"
import "./CreateButtons.css"
import { useEffect, useState } from "react"

function CreateButtons(props: { nameButton: string, backTo: string, functionOnCreate: () => Promise<any> }) {
    const [created, setCreated] = useState(false)
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const onClickFunc = async () => {
        await props.functionOnCreate()
            .then(() => setCreated(true))
            .catch((error) => setError(error.message))
    }

    const redirect = () => {
        if (!created) return
        navigate(props.backTo, { replace: true })
    }

    useEffect(() => {
        redirect()
    }, [created])

    return (
        <div id="boxCreateButtons">
            <button id="createButton" onClick={onClickFunc}>{props.nameButton}</button>
            <Link to={props.backTo} id="linkToCRUD"><label id="cancelButton">Cancelar</label></Link>
            {error === "" ? <></> : <div id = "createError">{error}</div>}
        </div>
    )
}

export default CreateButtons