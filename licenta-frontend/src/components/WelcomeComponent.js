import React from 'react';
import NavBarComponent from './NavBarComponent';
import image from '../img.jpg'
import {useState, useEffect} from 'react'
import Locatari from './Locatari'


export function WelcomeComponent(props){
    const [user,setUser] = useState({})
    const [renderLocatari,setRenderLocatari] = useState(false)


    window.addEventListener("hashchange", (evt)=>{
        if(window.location.hash === "#locatari")
            setRenderLocatari(true);
        else{
            setRenderLocatari(false);
        }
    })

    useEffect(() => {
        if(typeof props.location.state !== 'undefined'){
            console.log("IF")
            console.log(props.location.state)
            setUser(props.location.state)
            sessionStorage.setItem("userDetails" , JSON.stringify(props.location.state))
        }
        else{
            setUser(JSON.parse(sessionStorage.getItem("userDetails")))
            console.log("ELSE")
        }
    }, [])

  

    const clickHome= () =>{
        setRenderLocatari(false)
    }

    return(
        <div>
            {console.log(user)}
            <NavBarComponent props={user} home={clickHome}></NavBarComponent>
            
            {renderLocatari ? <Locatari></Locatari> :<div className="centered" style={{backgroundImage : `url(${image})`}}>
                <h3 style={{fontSize:'40px'}}>Bine ai venit ,{user.firstName}!</h3>
            </div>}
            
            
        </div>
    )
}