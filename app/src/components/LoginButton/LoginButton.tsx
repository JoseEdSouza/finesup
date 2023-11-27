import { useEffect, useState } from "react";
import "./LoginButton.css";
import { useNavigate } from "react-router-dom";

function LoginButton(props: { login: () => Promise<boolean> }) {
	const [isAccepted, setAccepted] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	
	useEffect(() => {
		redirect();
	}, [isAccepted]);

	const redirect = () => {
		if (!isAccepted) return;
		navigate("/home", { replace: true });
	};
	const onClickLoginButton = async () => {
		await props.login()
		.then((res) => setAccepted(res))
		.catch((err) => setError(err.message));
	};

	return (
		<>
			<button id="loginButton" onClick={onClickLoginButton}>
			Fazer Login
			</button>
			{error === ""? <></> : <div id = "loginError">{error}</div>}
		</>
	);
}
''
export default LoginButton;
