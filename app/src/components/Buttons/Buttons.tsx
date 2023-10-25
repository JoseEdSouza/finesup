import "./Buttons.css";

function Buttons(){
    return (
        <div className="Buttons">
            <button id="Import">Importar Extrato</button>
            <button id="Fixed">Lançamentos fixos</button>
            <button id="History">Vizualizar Histórico</button>
            <button id="Add">+</button>
        </div>
    );
}

export default Buttons;