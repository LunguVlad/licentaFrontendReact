import React from 'react';
import {useState , useEffect} from 'react';

function LoginComponent(){

    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const [pass,setPass] = useState("")

    const passwordChange = (evt) =>{
        setUser.password = evt.target.value;
    }

    useEffect(() =>{
        console.log(pass);
    })


    return (
        <form>
            <h1>Sign In</h1>

            <div className="form-group">
                <label>Email</label>
                <input type="email" id="email" className="form-control" placeholder="Introduceti email-ul" />
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

            <button type="button" className="btn btn-primary btn-block" onClick={() => {
                // let email = document.getElementById("email").value;
                // let password = document.getElementById("password").value;

                console.log(user)
                console.log(pass)

            }}>Submit</button>
        </form>
    );
}

export default LoginComponent;