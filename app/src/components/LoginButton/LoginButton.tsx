import { useState } from "react";
import "./LoginButton.css";

function LoginButton(props: { login: () => boolean }) {
	const [isAccepted, setAccepted] = useState(false);
    const redirected = ()=>{
        if (!isAccepted) return
        


    }
    const onClickLoginButton = () =>{
        setAccepted(props.login())
        redirected()
    }
	return (
		<button id="loginButton" onClick={onClickLoginButton}>
			Fazer Login
		</button>
	);
}

export default LoginButton;
