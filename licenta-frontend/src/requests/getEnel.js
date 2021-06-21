import axios from 'axios'

const getEnel = async (numarBloc) => {
    try{
        console.log(numarBloc)
        const response = await axios.get("http://192.168.1.144:8080/enel/" + numarBloc)
        return response.data
    }
    catch(error){
        console.error(error,"Enel GET")
    }
}

export default getEnel;