import { Button } from 'bootstrap';
import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {Form , FormControl} from 'react-bootstrap';


function NavBarComponent(){
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Administrare bloc</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="#locatari">Locatari</Nav.Link>
          <Nav.Link href="/">Log Out</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default NavBarComponent;
