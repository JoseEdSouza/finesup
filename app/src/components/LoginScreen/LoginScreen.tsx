import EmailGroup from "../EmailGroup/EmailGroup";
import PasswordGroup from "../PasswordGroup/PasswordGroup";
import LoginButton from "../LoginButton/LoginButton";
import "./LoginScreen.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserController from "../../controllers/UserController";

function LoginScreen() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const login = () => UserController.login(email,password)
    
    return (
        <div id="loginScreen">
            <img src="/icon-logo.png" style={{ position: "relative", top: "-80%", height: "25vh" }} />
            <EmailGroup setEmail={setEmail} />
            <PasswordGroup setPassword={setPassword}/>
            <LoginButton login={login} />
            <label id="loginToRegisterLabel"> Não tem Conta ? <Link to="/register" style={{ color: "var(--primaryColor)" }}>Cadastre-se</Link></label>
        </div>
    );
}

export default LoginScreen;