import React from 'react';
import {useState , useEffect} from 'react';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import postFacturaEnel from '../requests/postFacturaEnel';
import postConsumContorizat from '../requests/postConsumContorizat';

function CreateConsumContorizat(props) {
    const [factura,setFactura] = useState({
        luna : null,
        an : null,
        consumApaReceScara1 : 0,
        consumApaReceScara2 : 0,
        consumApaReceScara3 : 0,
        consumApaReceMenajer : 0,
        consumApaCaldaScara1 : 0,
        consumApaCaldaScara2 : 0,
        consumApaCaldaScara3 : 0,
        consumApaCaldaMenajer : 0,
    })
    const [numarBloc,setNumarBloc] = useState(props.props.props.numarBloc)
    const [numarScari,setNumarScari] = useState(props.props.props.numarScari)

    const handleChange = (evt) => {
        setFactura({
            ...factura,
            [evt.target.name] : evt.target.value
        })
    }

    async function handleSubmit(){
        let response = await postConsumContorizat(factura,numarBloc);
        alert("Consumuri adaugate")
    }

    return(
        <Form title="Adauga factura enel">
            {console.log(numarScari)}
            <h3> Consumuri contorizate la nivelul blocului </h3>
            <h5 className="centerHorizontal"> Apa rece </h5>
            <Form.Group controlId = "email">
                <FormLabel>Scara 1 </FormLabel>
                <Form.Control name="consumApaReceScara1" type="number" placeholder= "Valoare consum" onChange={handleChange}></Form.Control>
            </Form.Group>
            { numarScari > 1  ?
            <Form.Group controlId = "nume">
                <FormLabel>Scara 2</FormLabel>
                <Form.Control name="consumApaReceScara2" type="number" placeholder= "Valoare consum" onChange={handleChange}></Form.Control>
            </Form.Group> : console.log("Mai mult de o scara")
            }   
            { numarScari === 3 ?
            <Form.Group controlId = "nume">
                <FormLabel>Scara 3</FormLabel>
                <Form.Control name="consumApaReceScara3" type="number" placeholder= "Valoare consum" onChange={handleChange}></Form.Control>
            </Form.Group> : console.log("Mai putin de 3 scari")
            }
              <Form.Group controlId = "email">
                <FormLabel>Menajer</FormLabel>
                <Form.Control name="consumApaReceMenajer" type="number" placeholder= "Valoare consum" onChange={handleChange}></Form.Control>
            </Form.Group>
            <br/>
            <h5 className ="centerHorizontal"> Apa calda </h5>
            <Form.Group controlId = "email">
                <FormLabel>Scara 1 </FormLabel>
                <Form.Control name="consumApaCaldaScara1" type="number" placeholder= "Valoare consum" onChange={handleChange}></Form.Control>
            </Form.Group>
            { numarScari > 1  ?
            <Form.Group controlId = "nume">
                <FormLabel>Scara 2</FormLabel>
                <Form.Control name="consumApaCaldaScara2" type="number" placeholder= "Valoare consum" onChange={handleChange}></Form.Control>
            </Form.Group> : console.log("Mai mult de o scara")
            }   
            { numarScari === 3 ?
            <Form.Group controlId = "nume">
                <FormLabel>Scara 3</FormLabel>
                <Form.Control name="consumApaCaldaScara3" type="number" placeholder= "Valoare consum" onChange={handleChange}></Form.Control>
            </Form.Group> : console.log("Mai putin de 3 scari")
            }
              <Form.Group controlId = "email">
                <FormLabel>Menajer</FormLabel>
                <Form.Control name="consumApaCaldaMenajer" type="number" placeholder= "Valoare consum" onChange={handleChange}></Form.Control>
            </Form.Group>

            <br/>

            <Button variant="dark" type = "button"  onClick={handleSubmit}> Adauga Consum Contorizat</Button> 

        </Form>
    )
}

export default CreateConsumContorizat