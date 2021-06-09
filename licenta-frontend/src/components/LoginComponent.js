import React from 'react';
import {useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button'
import authenticateUser from '../requests/authenticate';
import {useHistory} from 'react-router-dom'

function LoginComponent(){

    const [pass,setPass] = useState("")
    const [email,setEmail] = useState("")
    const [returnedUser,setReturnedUser] = useState({})
    const history = useHistory()


    

    const handleLogin = async () =>{
        let user = {
            email: email,
            password: pass
        }

        let response = await authenticateUser(user);


        setReturnedUser(response)

    
        if(1==1){
            history.push("/home")
        }

    }

    useEffect(() =>{
        console.log("STATE USER: " + returnedUser)
    })

    return (
        <form>
            <h1>Sign In</h1>

            <div className="form-group">
                <label>Email</label>
                <input type="email" id="email" className="form-control" placeholder="Introduceti email-ul" onChange={evt => setEmail(evt.target.value)} />
            </div>

            <div className="form-group">
                <label>Parola</label>
                <input type="password" id="password" className="form-control" placeholder="Introduceti parola" onChange={evt => setPass(evt.target.value)} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
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