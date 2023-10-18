import EmailGroup from "../EmailGroup/EmailGroup";
import PasswordGroup from "../PasswordGroup/PasswordGroup";
import LoginButton from "../LoginButton/LoginButton";
import "./LoginScreen.css";

function LoginScreen(){
    return(
        <div className="LoginScreen">
            <EmailGroup/>
            <PasswordGroup/>
            <LoginButton/>
        </div>
    );
}

export default LoginScreen;