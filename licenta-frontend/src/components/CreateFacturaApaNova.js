import React from 'react';
import {useState , useEffect} from 'react';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import postFacturaApaNova from '../requests/postFacturaApaNova';

export function CreateFacturaApaNova(props) {
    const [factura,setFactura] = useState({
        luna : null,
        an : null,
        pretConsumApaRece : 0,
        pretConsumApaReceRestant : 0,
        consumFacturatApaRece: 0,
        pretConsumApaCalda: 0,
        pretConsumApaCaldaRestant: 0,
        consumFacturatApaCalda: 0
    })
    const [numarBloc,setNumarBloc] = useState(props.props)

    const handleChange = (evt) => {
        setFactura({
            ...factura,
            [evt.target.name] : evt.target.value
        })
    }

    async function handleSubmit(){
        let response = await postFacturaApaNova(factura,numarBloc);
        alert("Factura apa nova adaugata")
    }

    return(
        <Form title="Adauga utilizator">
            <h3> Date utilizator </h3>
            <Form.Group controlId = "email">
                <FormLabel>Pret apa rece facturat</FormLabel>
                <Form.Control name="pretConsumApaRece" type="number" placeholder= "Introduceti pretul facturat pentru apa rece" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "nume">
                <FormLabel>Pret restant apa rece facturat</FormLabel>
                <Form.Control name="pretConsumApaReceRestant" type="number" placeholder= "Introduceti pretul restant facturat pentru apa rece" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "nume">
                <FormLabel>Consum apa rece facturat</FormLabel>
                <Form.Control name="consumFacturatApaRece" type="number" placeholder= "Introduceti consumul facturat pentru apa rece" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "nume">
                <FormLabel>Pret apa calda facturat</FormLabel>
                <Form.Control name="pretConsumApaCalda" type="number" placeholder= "Introduceti pretul facturat pentru apa calda" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "nume">
                <FormLabel>Pret restant apa calda facturat</FormLabel>
                <Form.Control name="pretConsumApaCaldaRestant" type="number" placeholder= "Introduceti pretul restant facturat pentru apa rece" onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group controlId = "nume">
                <FormLabel>Consum apa calda facturat</FormLabel>
                <Form.Control name="consumFacturatApaCalda" type="number" placeholder= "Introduceti consumul facturat pentru apa rece" onChange={handleChange}></Form.Control>
            </Form.Group>
            <br/>
            <Button variant="dark" type = "button"  onClick={handleSubmit}> Adauga factura Apa Nova </Button>
        </Form>
    )
}