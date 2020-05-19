import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID pPWoR9bGNIUO4YzzY6t-nS5yUcgbJJmnn0AhB3G_fuM'
    }
});