interface AuthHandler{
    handle(email:string,password:string):boolean
}

export default AuthHandler