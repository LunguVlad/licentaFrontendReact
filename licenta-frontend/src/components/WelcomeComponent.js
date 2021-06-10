import React from 'react';
import NavBarComponent from './NavBarComponent';
import image from '../img.jpg'
import {useState, useEffect} from 'react'
import Locatari from './Locatari'


export function WelcomeComponent(props){
    const [user,setUser] = useState(props.location.state)
    const [renderLocatari,setRenderLocatari] = useState(false)

    useEffect(()=>{
        // if(props != undefined){
        //     setUser(props.location.state)
        // }
    })

    window.addEventListener("hashchange", (evt)=>{
        if(window.location.hash === "#locatari")
            setRenderLocatari(true);
        else{
            setRenderLocatari(false);
        }
    })


    const chooseRender= () =>{
        if(renderLocatari===true)
            return <Locatari></Locatari>
    }

    return(
        <div>
            {console.log(user)}
            <NavBarComponent props={user}></NavBarComponent>
            
            {renderLocatari ? <Locatari></Locatari> :<div className="centered" style={{backgroundImage : `url(${image})`}}>
                <h3 style={{fontSize:'40px'}}>Bine ai venit ,{user.firstName}!</h3>
            </div>}
            
            
        </div>
    )
}