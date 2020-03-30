import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://andoni-proyecto.firebaseio.com/'
});

export default instance;