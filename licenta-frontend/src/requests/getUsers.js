import axios from 'axios'

const getUsers = async (numarBloc) => {
    try{
        const response = await axios.get("http://192.168.1.144:8080/user/bloc/" + numarBloc)
        return response.data
    }
    catch(error){
        console.error(error,"User not posted")
    }
}

export default getUsers;