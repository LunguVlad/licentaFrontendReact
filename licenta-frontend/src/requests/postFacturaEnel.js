import axios from 'axios'

const postFacturaEnel = async (factura,numarBloc) => {
    try{
        console.log(numarBloc)
        const response = await axios.post("http://192.168.1.144:8080/enel/create/" + numarBloc, factura)
    }
    catch(error){
        console.error(error,"Factura Apa Nova not posted")
    }
}

export default postFacturaEnel;