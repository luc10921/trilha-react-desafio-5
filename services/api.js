import axios from 'axios';

export const api  = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        apikey: process.env.SUPABASE_KEY,
        authorization: `Bearer ${process.env.SUPABASE_KEY}`
    }
})