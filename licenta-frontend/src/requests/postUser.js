import axios from 'axios'

const postUser = async (user,numarBloc) => {
    try{
        const response = await axios.post("http://192.168.1.144:8080/user/createUser/" + numarBloc , user)
    }
    catch(error){
        console.error(error,"User not posted")
    }
}

export default postUser;