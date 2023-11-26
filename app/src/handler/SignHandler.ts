interface SignHandler{
    handle(name:string, email:string,password:string,confirmPassword:string):boolean
}

export default SignHandler