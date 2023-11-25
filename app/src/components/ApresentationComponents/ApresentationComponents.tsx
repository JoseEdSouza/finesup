import { Link } from "react-router-dom";
import "./ApresentationComponents.css"

function ApresentationComponents(){
    return(
        <>
            <img className="LogoRegister" src="icon-logo.png" alt="Logo" />;
            <label id="logoName">Fine's Up</label>
            <label id="labelUP">Dê um <strong>UP</strong> nas suas finanças!</label>

            <div id="container">
                <label htmlFor="" id="labelSlogan">Comece <strong>agora</strong> a se organizar financeiramente!</label>
                <label id="labelName"><strong>Nome</strong></label>
                <input type="name" className="inputName" ></input>

                <label id="labelEmail"><strong>E-mail</strong></label>
                <input type="email" placeholder="myemail@example.com" name="email" className="inputEmail"></input>

                <label id="labelPassword"><strong>Senha</strong></label>
                <input type="password" placeholder="••••••••" name="password" className="inputPassword" required></input>

                <label id="labelConfirm"><strong><strong>Confirmar senha</strong></strong></label>
                <input type="confirmPassword" placeholder="••••••••" name="confirmPassword" className="inputConfirm" required></input>
                <hr id="lineRegister"></hr>
                <Link to="/home">
                    <button id="buttonSubmit">Crie sua conta</button>
                </Link>
                <label id="labelQuestion">Já passui cadastro? <Link to="/login" id="login">Faça login</Link></label>
            </div>
        </>
    );
}

export default ApresentationComponents;