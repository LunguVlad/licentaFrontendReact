import { Button } from 'bootstrap';
import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {Form , FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBarComponent(props){
    return(
        <Navbar bg="dark" variant="dark">
          {console.log("NAVBAR")}
          {console.log(props)}
        <Navbar.Brand href="#home">Administrare bloc</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/administration" as={Link} to={{
            pathname:"/administration",
            state: props
          }}>Home</Nav.Link>
          <Nav.Link href="#locatari">Locatari</Nav.Link>
          <Nav.Link href="#facturi">Facturi</Nav.Link>
          <Nav.Link href="/">Log Out</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default NavBarComponent;
