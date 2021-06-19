import React from 'react';
import {useState , useEffect} from 'react';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import postFacturaEnel from '../requests/postFacturaEnel';

function CreateFacturaEnel(props) {
    const [factura,setFactura] = useState({
        luna : null,
        an : null,
        valoareScara1: 0,
        valoareScara2: 0,
        valoareScara3: 0
    })
    const [numarBloc,setNumarBloc] = useState(props.props.numarBloc)
    const [numarScari,setNumarScari] = useState(props.props.numarScari)

    const handleChange = (evt) => {
        setFactura({
            ...factura,
            [evt.target.name] : evt.target.value
        })
    }

    async function handleSubmit(){
        let response = await postFacturaEnel(factura,numarBloc);
        alert("Factura Enel adaugata")
    }

    return(
        <Form title="Adauga factura enel">
            {console.log(numarScari)}
            <h3> Date utilizator </h3>
            <Form.Group controlId = "email">
                <FormLabel>Pret apa rece facturat</FormLabel>
                <Form.Control name="valoareScara1" type="number" placeholder= "Valoare facturata scara 1" onChange={handleChange}></Form.Control>
            </Form.Group>
            { numarScari > 1  ?
            <Form.Group controlId = "nume">
                <FormLabel>Pret restant apa rece facturat</FormLabel>
                <Form.Control name="valoareScara2" type="number" placeholder= "Valoare facturata scara 2" onChange={handleChange}></Form.Control>
            </Form.Group> : console.log("Mai mult de o scara")
            }   
            { numarScari === 3 ?
            <Form.Group controlId = "nume">
                <FormLabel>Consum apa rece facturat</FormLabel>
                <Form.Control name="valoareScara3" type="number" placeholder= "Valoare facturata scara 3" onChange={handleChange}></Form.Control>
            </Form.Group> : console.log("Mai putin de 3 scari")
            }


            <Button variant="dark" type = "button"  onClick={handleSubmit}> Adauga factura Apa Nova </Button> 

        </Form>
    )
}

export default CreateFacturaEnel