import axios from 'axios'

const postUser = async (user) => {
    try{
        const response = await axios.post("http://10.0.1.2:8080/user/createUser", user)
    }
    catch(error){
        console.error(error,"User not posted")
    }
}

export default postUser;