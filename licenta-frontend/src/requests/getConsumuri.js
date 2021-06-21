import axios from 'axios'

const getConsumuri = async (numarBloc) => {
    try{
        console.log(numarBloc)
        const response = await axios.get("http://192.168.1.144:8080/consum/contor/" + numarBloc)
        return response.data
    }
    catch(error){
        console.error(error,"Consumuri GET")
    }
}

export default getConsumuri;