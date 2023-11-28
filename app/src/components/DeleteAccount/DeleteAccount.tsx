import { useNavigate } from "react-router-dom"
import "./DeleteAccount.css"

function DeleteAccount(props: { deleteAccount: (confirm: boolean) => void }) {
    const navigate = useNavigate()
    
    return (
        <div style={{ position: "absolute", width: "100vw", height: "130vh", left: "50%", transform: "translateX(-50%)", zIndex: "1" }}>
            <div id="deleteAccount">
                <img src="/icon_cancel.svg" className="cancelIcon" onClick={() => props.deleteAccount(false)} />
                <label id="warining"><strong>Tem certeza que deseja excluir sua conta?</strong></label>
                <label id="warining2">Essa ação é irreversível, quando concordar em excluir sua conta você  nunca mais poderá acessá-la de novo.</label>
                <button id="confirm">Sim, quero excluir</button>
                <button id="regreat" onClick={() => props.deleteAccount(false)}>Não quero excluir</button>
            </div>
        </div>
    )
}

export default DeleteAccount