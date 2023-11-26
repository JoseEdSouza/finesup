import { Link } from "react-router-dom";
import "./HomeApresentation.css"

function HomeApresentation(){
    return(
        <>
            <img className="LogoApresentation" src="/icon-logo.png" alt="Logo" />
            <label id="logoName">Fine's Up</label>
            <div id="containerApresentation">
                <label id="labelInitialApresentation">Comece <strong>agora</strong> a se organizar financeiramente!</label>
                <Link to="/register">
                    <button id="createAccButtonApresentation">Crie sua conta</button>
                </Link>
                <hr id="linhaApresentation"></hr>
                <label id="labelQuestionApresentation">Já possui cadastro?</label>
                <Link to="/login">
                    <button id="loginButtonApresentation">Faça login</button>
                </Link>
            </div>
        </>
    );
}

export default HomeApresentation;