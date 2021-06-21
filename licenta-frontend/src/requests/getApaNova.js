import axios from 'axios'

const getApaNova = async (numarBloc) => {
    try{
        console.log(numarBloc)
        const response = await axios.get("http://192.168.1.144:8080/apaNova/" + numarBloc)
        return response.data
    }
    catch(error){
        console.error(error,"Apa nova GET")
    }
}

export default getApaNova;