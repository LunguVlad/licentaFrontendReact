import axios from 'axios'

const authenticateUser = async (user) => {
    try{
        const response = await axios.post("http://192.168.1.144:8080/user/login/pls", user);
        return response.data;
    }
    catch(error){
        console.error(error,"Wrong account")
    }
}

export default authenticateUser;