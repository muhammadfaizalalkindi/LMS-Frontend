import axios from "axios";

export const getToken = () => {
    return localStorage.getItem('auth-token')
}

export const setToken = (token) => {
    localStorage.setItem('auth-token', token)
}

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

instance.interceptors.request.use(function(config) {
    return config
}, (error) => Promise.reject(error))

instance.interceptors.response.use(function(response) {
    return response
}, (error) => {
    if(error?.response?.data?.message == "Error verifying token: jwt malformed" ) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
})

export function login({email, password}) {
    return instance.post('auth/login', {email, password})
}

export async function register({ email, password, name,phone_number }) {
    try {
        // Jangan mendeklarasikan variabel data
        await axios.post(`127.0.0.1:3000/auth/register`, {
            email: email,
            password: password,
            name: name,
            phone_number,
            image:null,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export default instance
