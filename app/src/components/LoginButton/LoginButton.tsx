import { useEffect, useState } from "react";
import "./LoginButton.css";
import { useNavigate } from "react-router-dom";

function LoginButton(props: { login: () => Promise<boolean> }) {
	const [isAccepted, setAccepted] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		redirect();
	}, [isAccepted]);

	const redirect = () => {
		if (!isAccepted) return;
		navigate("/home", { replace: true });
	};
	const onClickLoginButton = async () => {
		await props.login().then((res) => setAccepted(res));
	};

	return (
		<button id="loginButton" onClick={onClickLoginButton}>
			Fazer Login
		</button>
	);
}

export default LoginButton;
