import React from 'react'
import { Pagination } from 'react-bootstrap';
import NavBarComponent from './NavBarComponent';
import Table from 'react-bootstrap/Table'
import TableLocatari from './TableLocatari';


const Locatari = (props)=>{

  

    
 

    return(
       
        <TableLocatari props={props}></TableLocatari>
       
    )
}

export default Locatari;