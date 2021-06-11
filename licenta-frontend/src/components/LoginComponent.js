import React from 'react';
import {useState , useEffect, useRef, useLayoutEffect} from 'react';
import Button from 'react-bootstrap/Button'
import authenticateUser from '../requests/authenticate';
import {useHistory} from 'react-router-dom'

function LoginComponent(){

    const [pass,setPass] = useState("")
    const [email,setEmail] = useState("")
    const [returnedUser,setReturnedUser] = useState({})
    const history = useHistory()
    const [firstRender,setFirstRender] = useState(true) 
    const [rememberMe,setRememberMe] = useState(false)
    


    

    const handleLogin = async () =>{
        let user = {
            email: email,
            password: pass
        }

        let response = await authenticateUser(user);

        setReturnedUser(response)

        
       

    }
   
    useEffect(() => {
        //component did mount
        let rememberMe = localStorage.getItem('rememberMe') === 'true';
        let email = rememberMe ? localStorage.getItem('email') : '';
        setRememberMe(rememberMe)
        setEmail(email)
    }, [])

    useEffect(() => {
        console.log(rememberMe)
    }, [rememberMe])

    useEffect(() =>{
        if(firstRender === true){
        }
        else{
            if(returnedUser.email === email){
                localStorage.setItem("rememberMe" , rememberMe)
                localStorage.setItem("email",rememberMe ? email : "")
                history.push({
                    pathname: '/administration',
                    state: returnedUser
                })
            }else{
            alert("USERNAME PASS WRONG")
            }
        }
        setFirstRender(false)
    },[returnedUser])

    return (
        <form>
            <h1>Sign In</h1>

            <div className="form-group">
                <label>Email</label>user
                <input type="email" id="email" className="form-control" placeholder="Introduceti email-ul" value={email} onChange={evt => setEmail(evt.target.value)} />
            </div>

            <div className="form-group">
                <label>Parola</label>
                <input type="password" id="password" className="form-control" placeholder="Introduceti parola" onChange={evt => setPass(evt.target.value)} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" checked={rememberMe} onChange={() => {if(rememberMe === false) setRememberMe(true); else setRememberMe(false);}} />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    {console.log(returnedUser)}
                </div>
            </div>

            <div >
            <Button  variant="dark"  type="button" className="btn btn-primary btn-block" onClick={handleLogin}>Submit</Button>
            </div>
        
        </form>
    );
}

export default LoginComponent;