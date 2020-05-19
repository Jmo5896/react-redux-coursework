import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // mode: 'no-cors',
    // headers: {'Access-Control-Allow-Origin': '*'}
})