import { Link } from "react-router-dom";
import "./ApresentationComponents.css"
import UserController from "../../controllers/UserController";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ApresentationComponents(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [isAccepted, setAccepted] = useState(false);
    const navigate = useNavigate();
    const register = () => UserController.signup(name,email,password,confirmPassword)
    
    const redirect = () => {
        if (!isAccepted) return;
        navigate("/home", { replace: true });
    }

    const onClickSignupButton = async () => {
        await register().then((res) => setAccepted(res));
    }

    useEffect(() => {
        redirect();
    }, [isAccepted])

    return(
        <>
            <img className="LogoRegister" src="icon-logo.png" alt="Logo" />;
            <label id="logoName">Fine's Up</label>
            <label id="labelUP">Dê um <strong>UP</strong> nas suas finanças!</label>

            <div id="container">
                <label htmlFor="" id="labelSlogan">Comece <strong>agora</strong> a se organizar financeiramente!</label>
                <label id="labelName"><strong>Nome</strong></label>
                <input 
                    type="name" 
                    className="inputName" 
                    onChange={(inp) => setName(inp.target.value)}
                />

                <label id="labelEmail"><strong>E-mail</strong></label>
                <input 
                    type="email" 
                    placeholder="myemail@example.com" 
                    name="email" 
                    className="inputEmail"
                    onChange={(inp) => setEmail(inp.target.value)}
                />

                <label id="labelPassword"><strong>Senha</strong></label>
                <input 
                    type="password"
                    placeholder="••••••••" 
                    name="password" 
                    className="inputPassword" 
                    required
                    onChange={(inp) => setPassword(inp.target.value)}
                />

                <label id="labelConfirm"><strong><strong>Confirmar senha</strong></strong></label>
                <input 
                    type="confirmPassword" 
                    placeholder="••••••••" 
                    name="confirmPassword" 
                    className="inputConfirm" 
                    required
                    onChange={(inp) => setConfirmPassword(inp.target.value)}
                />
                <hr id="lineRegister"></hr>
                <button id="buttonSubmit" onClick={onClickSignupButton}>Crie sua conta</button>
                <label id="labelQuestion">Já passui cadastro? <Link to="/login" id="login">Faça login</Link></label>
            </div>
        </>
    );
}

export default ApresentationComponents;