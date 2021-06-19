import axios from 'axios'

const postFacturaSuez = async (factura,numarBloc) => {
    try{
        console.log(numarBloc)
        const response = await axios.post("http://192.168.1.144:8080/suez/create/" + numarBloc, factura)
    }
    catch(error){
        console.error(error,"Factura Suez not posted")
    }
}

export default postFacturaSuez;