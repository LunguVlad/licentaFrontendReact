import axios from 'axios'

const postCheltuiala = async (factura,numarBloc) => {
    try{
        console.log(numarBloc)
        const response = await axios.post("http://192.168.1.144:8080/cheltuiala/create/" + numarBloc, factura)
    }
    catch(error){
        console.error(error,"Cheltuiala not posted")
    }
}

export default postCheltuiala;