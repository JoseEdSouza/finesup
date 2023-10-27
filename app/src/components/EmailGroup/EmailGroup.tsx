import "./EmailGroup.css";

function EmailGroup(){
    return(
        <>
            <label className="LabelEmail">Email:</label>
            <input type="email" placeholder="myemail@example.com" className="InputEmail"></input>
        </>
    );
}

export default EmailGroup;