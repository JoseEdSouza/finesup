import EmailGroup from "../EmailGroup/EmailGroup";
import PasswordGroup from "../PasswordGroup/PasswordGroup";
import LoginButton from "../LoginButton/LoginButton";
import "./LoginScreen.css";
import { Link } from "react-router-dom";

function LoginScreen() {
    return (
        <div id="loginScreen">
            <img src="/icon-logo.png" style={{ position: "relative", top: "-80%", height: "25vh" }} />
            <EmailGroup />
            <PasswordGroup />
            <Link to="/home">
                <LoginButton />
            </Link>
            <label id="loginToRegisterLabel"> Não tem Conta ? <Link to="/register" style={{ color: "var(--primaryColor)" }}>Cadastre-se</Link></label>
        </div>
    );
}

export default LoginScreen;