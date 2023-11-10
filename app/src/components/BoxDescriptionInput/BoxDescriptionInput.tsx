import "./BoxDescriptionInput.css";

function BoxDescriptionInput() {
    return (
        <div id="boxDescriptionInput">
            <label htmlFor="" id="boxlabelDescription"><strong>Descrição:</strong></label>
            <textarea id="boxInputDescription" placeholder="Ex: viagem para a praia"/>
        </div>
    )
}

export default BoxDescriptionInput