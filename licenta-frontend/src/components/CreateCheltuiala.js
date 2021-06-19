import React from 'react';
import {useState , useEffect} from 'react';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import postFacturaEnel from '../requests/postFacturaEnel';
import postFacturaSuez from '../requests/postFacturaSuez';
import postCheltuiala from '../requests/postCheltuiala';

function CreateCheltuiala(props) {
    const [factura,setFactura] = useState({
        luna : null,
        an : null,
        nume: "",
        valoare: 0,
        modDeCalcul: 0
    })
    const [numarBloc,setNumarBloc] = useState(props.props.props.numarBloc)

    const handleChange = (evt) => {
        if(evt.target.name === "modDeCalcul"){
            if(evt.target.value === "Cota indiviza"){
                setFactura({
                    ...factura,
                    [evt.target.name] : 0
                })
            }
            if(evt.target.value === "Numarul de persoane"){
                setFactura({
                    ...factura,
                    [evt.target.name] : 1
                })
            }
            if(evt.target.value === "Numarul de apartamente"){
                setFactura({
                    ...factura,
                    [evt.target.name] : 2
                })
            }
        }
        else{
            setFactura({
                ...factura,
                [evt.target.name] : evt.target.value
            })
        }
    }

    async function handleSubmit(){
        let response = await postCheltuiala(factura,numarBloc);
        alert("Cheltuiala " + factura.nume + " a fost adaugata!")
    }

    return(
        <Form title="Adauga factura suez">
            <h3> Adauga cheltuiala </h3>
            <Form.Group controlId = "email">
                <FormLabel>Nume</FormLabel>
                <Form.Control name="nume" type="name" placeholder= "Nume" onChange={handleChange}></Form.Control>
            </Form.Group>
           
            <Form.Group controlId = "nume">
                <FormLabel>Valoare</FormLabel>
                <Form.Control name="valoare" type="number" placeholder= "Valoare" onChange={handleChange}></Form.Control>
            </Form.Group> 
             
           
            <Form.Group controlId = "nume">
                <FormLabel>Mod de calcul in functie de</FormLabel>
                <Form.Control name="modDeCalcul" as="select" onChange={handleChange}>
                    <option>Cota indiviza</option>
                    <option>Numarul de persoane</option>
                    <option>Numarul de apartamente</option>
                </Form.Control>
            </Form.Group>


            <Button variant="dark" type = "button"  onClick={handleSubmit}> Adauga cheltuiala </Button> 

        </Form>
    )
}

export default CreateCheltuiala