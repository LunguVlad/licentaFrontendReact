import axios from 'axios'

const getSuez = async (numarBloc) => {
    try{
        console.log(numarBloc)
        const response = await axios.get("http://192.168.1.144:8080/suez/" + numarBloc)
        return response.data
    }
    catch(error){
        console.error(error,"Suez GET")
    }
}

export default getSuez;