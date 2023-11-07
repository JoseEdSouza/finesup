import "./BoxValueInput.css";

function BoxValueInput() {
    return (
        <div id="boxValueInput">
            <label id="boxlabelvalue"><strong>Meta:</strong></label>
            <input type="number" id="boxlabelInputValue" placeholder="R$"/>
        </div>
    )
}

export default BoxValueInput