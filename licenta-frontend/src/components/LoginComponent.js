import React from 'react';
import {useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button'

function LoginComponent(){

    const [pass,setPass] = useState("")
    const [email,setEmail] = useState("")


    useEffect(() =>{
        console.log(email + pass);
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
                </div>
            </div>

            <div >
            <Button  variant="dark"  type="button" className="btn btn-primary btn-block" onClick={() => {
                // let email = document.getElementById("email").value;
                // let password = document.getElementById("password").value;

                console.log(email)
                console.log(pass)

            }}>Submit</Button>
            </div>
        
        </form>
    );
}

export default LoginComponent;