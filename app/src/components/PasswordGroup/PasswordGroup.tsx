import "./PasswordGroup.css";

function PasswordGroup(){
    return(
        <>
            <label className="LabelPassword">Senha:</label>
            <input type="password" placeholder="DigiteSuaSenhaAqui" className="InputPassword"></input>
        </>
    );
}

export default PasswordGroup;