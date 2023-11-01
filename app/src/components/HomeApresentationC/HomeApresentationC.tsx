import "./HomeApresentationC.css"

function HomeApresentation(){
    return(
        <>
            <img className="Logo" src="icon-logo.png" alt="Logo" />;
            <label id="logoName">Fine's Up</label>
            <div id="container">
                <label id="labelInitial">Comece <strong>agora</strong> a se organizar financeiramente!</label>
                <button id="createAccButton">Crie sua conta</button>
                <hr id="linha"></hr>
                <label id="labelQuestion">Já possui cadastro?</label>
                <button id="loginButton">Faça login</button>
            </div>
        </>
    );
}

export default HomeApresentation;