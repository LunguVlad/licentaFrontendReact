import React from 'react';
import {useState,useEffect} from 'react'
import getUsers from '../requests/getUsers';
import {Table , Pagination, ModalBody, ModalFooter} from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Modal  from 'react-bootstrap/Modal';
import CreateUserComponent from './CreateUserComponent';

const TableLocatari = () =>{
    
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const [renderForm,setRenderForm] = useState(false)

    

    const selectOptions = {
        1 : 'Scara 1',
        2 : 'Scara 2',
        3 : 'Scara 3'
    }

    const colums = [
        {dataField: "lastName" , text: "Nume"},
        {dataField: "firstName" , text: "Prenume"},
        {dataField: "scara" , text: "Scara" , formatter: cell=>selectOptions[cell] ,filter: selectFilter({
            options:selectOptions,
            placeholder:"Toate scarile"
        })},
        {dataField: "apartament" , text: "Apartament"},
        {dataField: "nrPersoane" , text : "Numar persoane"}
    ]


    const handleClick = () =>{
        if(renderForm === false)
            setRenderForm(true) 
        else
            setRenderForm(false)
    }
    

   

    useEffect( async () => {
        let data = await getUsers()



        setUsers(data)

        console.log("DATA")
        console.log(data)
    },[])




    return(
        <div>
            {console.log("STATE TABLE")}
            {console.log(users)}
            <br></br>
            <br></br>

            <div>
                <Button variant={"dark"} type={"button"} onClick={handleClick} hover={true}>Adauga locatar</Button>
            </div>
            <div>
            <BootstrapTable
                keyField = "apartament"
                data = {users}
                columns = {colums}
                hover = {true}
                filter= {filterFactory()}
                pagination = {paginationFactory()}/>
            </div>

            <Modal show={renderForm}>
                <ModalBody>
                    <CreateUserComponent></CreateUserComponent>
                </ModalBody>
                <ModalFooter>
                        <Button variant="dark" onClick={handleClick}>Inchide</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default TableLocatari;