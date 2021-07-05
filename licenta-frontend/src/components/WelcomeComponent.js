import React from 'react';
import NavBarComponent from './NavBarComponent';
import image from '../img.jpg'
import {useState, useEffect} from 'react'
import Locatari from './Locatari'
import { CreateFacturaApaNova } from './CreateFacturaApaNova';
import CreateFacturaEnel from './CreateFacturaEnel'
import Facturi from './Facturi'


export function WelcomeComponent(props){
    const [user,setUser] = useState({})
    const [renderLocatari,setRenderLocatari] = useState(false)
    const [renderFacturi,setRenderFacturi] = useState(false)


    window.addEventListener("hashchange", (evt)=>{
        if(window.location.hash === "#locatari"){
            setRenderFacturi(false);
            setRenderLocatari(true);
        }
        else if(window.location.hash ==="#facturi"){
            setRenderLocatari(false);
            setRenderFacturi(true)
        }
        else{
            setRenderFacturi(false)
            setRenderLocatari(false)
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
        setRenderFacturi(false)
    }

    return(
        <div>
            {console.log(user)}
            <NavBarComponent props={user} home={clickHome}></NavBarComponent>

            {/* {renderLocatari ? <Locatari props={user.bloc.numarBloc}></Locatari> :<div className="centered" style={{backgroundImage : `url(${image})`}}>
                <h3 style={{fontSize:'40px'}}>Bine ai venit ,{user.firstName}!</h3>
            </div>}

            {renderFacturi ? <CreateFacturaApaNova props={user.bloc.numarBloc}></CreateFacturaApaNova> :<div className="centered" style={{backgroundImage : `url(${image})`}}>
                <h3 style={{fontSize:'40px'}}>Bine ai venit ,{user.firstName}!</h3>
            </div>} */}

            {renderLocatari ? <Locatari props={user.bloc.numarBloc}></Locatari> : renderFacturi ? <Facturi props={user.bloc}></Facturi> : <div className="centered" style={{backgroundImage : `url(${image})`}}>
                <h3 style={{fontSize:'40px'}}>Bine ai venit ,{user.firstName}!</h3>
                
            </div>}

            
            
        </div>
    )
}