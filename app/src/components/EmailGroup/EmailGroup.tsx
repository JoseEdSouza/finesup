import "./EmailGroup.css";

function EmailGroup(props:{setEmail:(email:string)=>void}){

    return(
        <>
            <label className="LabelEmail">Email:</label>
            <input 
            type="email" 
            placeholder="myemail@example.com" 
            className="InputEmail"
            onChange={(email)=>props.setEmail(email.target.value)}/>
        </>
    );
}

export default EmailGroup;