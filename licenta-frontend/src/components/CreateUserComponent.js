import React from 'react';
import {useState , useEffect} from 'react';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import postUser from '../requests/postUser'

function CreateUserComponent(props){

    const [numarBloc,setNumarBloc] = useState(props.props) 

    const [user,setUser] = useState({
        email:"",
        lastName:"",
        firstName:"",
        phoneNumber:"",
        scara:1,
        apartament:"",
        nrPersoane:"",
        cotaIndiviza:"",
        centrala:false
    })

    const handleChange = (evt) => {
        if(evt.target.name === "centrala"){
            setUser({
                ...user,
                [evt.target.name] : evt.target.checked
            })
        }else{
            setUser({
                ...user,
                [evt.target.name] : evt.target.value
            })
        }
    }

    useEffect(() =>{
        console.log(user);
    })



    async function handleSubmit(){
        let response = await postUser(user,numarBloc);
        alert("Utilizator adaugat")
    }
    
    return(
        <Form title="Adauga utilizator">
            <h3> Date utilizator </h3>
            <Form.Group controlId = "email">
                <FormLabel>Email utilizator</FormLabel>
                <Form.Control name="email" type="email" placeholder= "Introduceti email" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "nume">
                <FormLabel>Nume</FormLabel>
                <Form.Control name="lastName" type="name" placeholder= "Introduceti numele" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "prenume">
                <FormLabel>Prenume</FormLabel>
                <Form.Control name="firstName" type="name" placeholder= "Introduceti prenumele" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "numarTelefon">
                <FormLabel>Numar de telefon</FormLabel>
                <Form.Control name="phoneNumber" type="number" placeholder= "Introduceti numarul de telefon" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "scara">
                <FormLabel>Scara</FormLabel>
                <Form.Control name="scara" as="select" onChange={handleChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId = "apartament">
                <FormLabel>Apartament</FormLabel>
                <Form.Control name="apartament" type="number" placeholder= "Apartament" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "nrPersoane">
                <FormLabel>Numar persoane</FormLabel>
                <Form.Control name="nrPersoane" type="number" placeholder= "Numar persoane" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "cotaIndiviza">
                <FormLabel>Cota indiviza</FormLabel>
                <Form.Control name="cotaIndiviza" type="email" placeholder= "Cota indiviza" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "centrala">
                <Form.Check name="centrala" type="checkbox" label= "Centrala" onChange={handleChange}></Form.Check>
            </Form.Group>
            <Button variant="dark" type = "button"  onClick={handleSubmit}> Adauga utilizator </Button>
        </Form>
    );
}

export default CreateUserComponent;