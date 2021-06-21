import axios from 'axios'

const getCheltuieli = async (numarBloc) => {
    try{
        console.log(numarBloc)
        const response = await axios.get("http://192.168.1.144:8080/cheltuiala/" + numarBloc)
        return response.data
    }
    catch(error){
        console.error(error,"Cheltuieli GET")
    }
}

export default getCheltuieli;