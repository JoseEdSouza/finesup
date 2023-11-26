import "./PasswordGroup.css";

function PasswordGroup(props:{setPassword:(password:string)=>void}){
    return(
        <>
            <label className="LabelPassword">Senha:</label>
            <input 
            type="password" 
            placeholder="DigiteSuaSenhaAqui" 
            className="InputPassword"
            onChange={(password) => props.setPassword(password.target.value)}
            />
        </>
    );
}

export default PasswordGroup;