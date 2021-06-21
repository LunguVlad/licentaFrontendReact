import React from 'react';
import { CreateFacturaApaNova } from './CreateFacturaApaNova';
import CreateFacturaSuez from './CreateFacturaSuez';
import CreateCheltuiala from './CreateCheltuiala';
import CreateConsumContorizat from './CreateConsumContorizat';
import CreateFacturaEnel from './CreateFacturaEnel';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import {useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Modal  from 'react-bootstrap/Modal';
import { ModalBody, ModalFooter } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import getCheltuieli from '../requests/getCheltuieli';
import getConsumuri from '../requests/getConsumuri';
import getApaNova from '../requests/getApaNova';
import getEnel from '../requests/getEnel';
import getSuez from '../requests/getSuez';

const Facturi = (props)=>{

   const [renderAla,setRenderAla] = useState(false) 
   const [numarScari,setNumarScari] = useState(props.props.numarScari)
   const [numarBloc,setNumarBloc] = useState(props.props.numarBloc)
   const [renderCheltuieli,setRenderCheltuieli] = useState(true)
   const [renderConsumuri,setRenderConsumuri] = useState(false)
   const [renderApaNova,setRenderApaNova] = useState(false)
   const [renderEnel,setRenderEnel] = useState(false)
   const [renderSuez,setRenderSuez] = useState(false)
   const [data,setData] = useState([])
   const [colums,setColums] = useState([])
   const [enelColums,setEnelColums] = useState([])
   const [renderForm,setRenderForm] = useState(false) 
   const [renderFormCheltuiala,setRenderFormCheltuiala] = useState(false)

   const cheltuialaColums = [{dataField: "id" , text: "ID" , sort: true},
   {dataField: "luna" , text: "Luna"},
   {dataField: "an" , text: "An"},
   {dataField: "nume" , text: "Nume"},
   {dataField: "valoare" , text: "Valoare"}]

   const consumColums = [{dataField: "id" , text: "ID" , sort: true},
   {dataField: "luna" , text: "Luna"},
   {dataField: "an" , text: "An"},
   {dataField: "consumApaReceScara1" , text: "Apa rece scara 1 (m³)"},
   {dataField: "consumApaReceScara2" , text: "Apa rece scara 2 (m³)"},
   {dataField: "consumApaReceScara3" , text: "Apa rece scara 3 (m³)"},
   {dataField: "consumApaReceMenajer" , text: "Apa rece menajer (m³)"},
   {dataField: "consumApaCaldaScara1" , text: "Apa calda scara 1 (m³)"},
   {dataField: "consumApaCaldaScara2" , text: "Apa calda scara 2 (m³)"},
   {dataField: "consumApaCaldaScara3" , text: "Apa calda scara 3 (m³)"},
   {dataField: "consumApaCaldaMenajer" , text: "Apa calda menajer (m³)"}]

   const apaNovaColums = [{dataField: "id" , text: "ID" , sort: true},
   {dataField: "luna" , text: "Luna"},
   {dataField: "an" , text: "An"},
   {dataField: "pretConsumApaRece" , text: "Valoare apa rece (RON)"},
   {dataField: "pretConsumApaReceRestant" , text: "Valoare apa rece restanta (RON)"},
   {dataField: "consumFacturatApaRece" , text: "Consum apa rece (m³)"},
   {dataField: "tarifApaRece" , text: "Tarif apa rece calculat (RON/m³)"},
   {dataField: "pretConsumApaCalda" , text: "Valoare calda rece (RON)"},
   {dataField: "pretConsumApaCaldaRestant" , text: "Valoare apa calda restanta (RON)"},
   {dataField: "consumFacturatApaCalda" , text: "Consum apa calda (m³)"},
   {dataField: "tarifApaCalda" , text: "Tarif apa calda calculat (RON/m³)"}]


  
   const defaultSorted = [{
    dataField: 'id', 
    order: 'desc' 
  }];

   useEffect(async () => {
    if(numarScari === 1){
        setEnelColums( [
            {dataField: "id" , text: "ID" , sort: true},
            {dataField: "luna" , text: "Luna"},
            {dataField: "an" , text: "An"},
            {dataField: "valoareScara1" , text: "Valoare totala (RON)"}]
        )
    }
    if(numarScari === 2){
        setEnelColums([
            {dataField: "id" , text: "ID" , sort: true},
            {dataField: "luna" , text: "Luna"},
            {dataField: "an" , text: "An"},
            {dataField: "valoareScara1" , text: "Valoare scara 1 (RON)"},
            {dataField: "valoareScara2" , text: "Valoare scara 2 (RON)"},
            {dataField: "valoareTotala" , text: "Valoare totala (RON)"}
        ])
    }
    if(numarScari === 3){
        setEnelColums([
            {dataField: "id" , text: "ID" , sort: true},
            {dataField: "luna" , text: "Luna"},
            {dataField: "an" , text: "An"},
            {dataField: "valoareScara1" , text: "Valoare scara 1 (RON)"},
            {dataField: "valoareScara2" , text: "Valoare scara 2 (RON)"},
            {dataField: "valoareScara3" , text: "Valoare scara 3 (RON)"},
            {dataField: "valoareTotala" , text: "Valoare totala (RON)"}
        ])
    }
    //component did mount
    setData(await getCheltuieli(numarBloc))
    setColums(cheltuialaColums)
    setRenderAla(true)
}, [])

    useEffect(() =>{
        console.log(data)
    },[data])

    useEffect(() =>{
        console.log(colums)
    },[colums])

    useEffect(async () =>{
        console.log("CONSUMRI TRUE + CHELTUIELI")
        if(renderConsumuri === true){
            setData(await getConsumuri(numarBloc))
            setColums(consumColums)
        }
        if(renderCheltuieli === true){
            setData(await getCheltuieli(numarBloc))
            setColums(cheltuialaColums)
        }
        if(renderApaNova === true){
            setData(await getApaNova(numarBloc))
            setColums(apaNovaColums)
        }
        if(renderEnel === true){
            setData(await getEnel(numarBloc))
            setColums(enelColums)
        }
        if(renderSuez === true){
            setData(await getSuez(numarBloc))
            setColums(enelColums)
        }
    },[renderConsumuri,renderCheltuieli,renderApaNova,renderEnel,renderSuez])

    // useEffect(async () => {
    //     console.log("CHELTUIELI TRUE")
    //     setData(await getCheltuieli(numarBloc))
    //     setColums(cheltuialaColums)
    // }, [renderCheltuieli === true])
 
    const handleClick = (evt) =>{
        if(evt.target.name==="cheltuieli"){
            setRenderConsumuri(false)
            setRenderApaNova(false)
            setRenderEnel(false)
            setRenderSuez(false)
            setRenderCheltuieli(true)
        }
        if(evt.target.name==="consumuri"){
            setRenderApaNova(false)
            setRenderEnel(false)
            setRenderSuez(false)
            setRenderCheltuieli(false)
            setRenderConsumuri(true)
        }
        if(evt.target.name==="apaNova"){
            setRenderEnel(false)
            setRenderSuez(false)
            setRenderCheltuieli(false)
            setRenderConsumuri(false)
            setRenderApaNova(true)
        }
        if(evt.target.name==="enel"){
            setRenderSuez(false)
            setRenderCheltuieli(false)
            setRenderConsumuri(false)
            setRenderApaNova(false)
            setRenderEnel(true)
        }
        if(evt.target.name==="suez"){
            setRenderCheltuieli(false)
            setRenderConsumuri(false)
            setRenderApaNova(false)
            setRenderEnel(false)
            setRenderSuez(true)
        }
    }

    const handleClickForm = () =>{
        if(renderForm === false)
            setRenderForm(true) 
        else
            setRenderForm(false)
    }
    return(
        
        <div>
            <span className="centerHorizontal">
            <ButtonGroup aria-label="Basic example">
                <Button type="reset" name="cheltuieli" variant="secondary" active={renderCheltuieli} onClick={handleClick}>Cheltuieli</Button>
                <Button name="consumuri" variant="secondary" active={renderConsumuri}  onClick={handleClick}>Consumuri contorizate</Button>
                <Button name="apaNova" variant="secondary" active={renderApaNova}  onClick={handleClick}>Apa nova</Button>
                <Button name="enel" variant="secondary" active={renderEnel}  onClick={handleClick}>Enel</Button>
                <Button name="suez" variant="secondary" active={renderSuez}  onClick={handleClick}>Suez</Button>
            </ButtonGroup>
            </span>
            
            {renderCheltuieli ? <Button variant="secondary" onClick = {handleClickForm}>Adauga cheltuiala</Button> : renderConsumuri ? <Button  variant="secondary" onClick = {handleClickForm}>Adauga consumuri</Button> : 
            renderApaNova ? <Button  variant="secondary" onClick = {handleClickForm}>Adauga factura Apa Nova</Button>: renderEnel ? <Button  variant="secondary" onClick = {handleClickForm}>Adauga factura Enel</Button> : renderSuez ? <Button  variant="secondary" onClick = {handleClickForm}>Adauga factura Suez</Button> : null}

            {renderAla ?  <BootstrapTable
                keyField = "id"
                defaultSorted = {defaultSorted}
                data = {data}
                columns = {colums}
                hover = {true}
                pagination = {paginationFactory()}/> : console.log("NO RENDER")}

            

            <Modal show={renderForm}>
                <ModalBody>
                    {renderCheltuieli ? <CreateCheltuiala props={props}></CreateCheltuiala> : renderConsumuri ? <CreateConsumContorizat props={props}></CreateConsumContorizat> : 
                    renderApaNova ? <CreateFacturaApaNova props = {props}></CreateFacturaApaNova> : renderEnel ? <CreateFacturaEnel props={props}></CreateFacturaEnel> :
                    renderSuez? <CreateFacturaSuez props={props}></CreateFacturaSuez> : null}
                </ModalBody>
                <ModalFooter>
                        <Button variant="dark" onClick={handleClickForm}>Inchide</Button>
                </ModalFooter>
            </Modal>
           
        </div>
       
    )
}

export default Facturi;