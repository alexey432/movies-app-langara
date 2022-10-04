import axios from 'axios';
import { API_KEY, BASE_URL } from './api_config';


export const getMovies = async (searchQuery) => {
    try {
        // console.log(`${BASE_URL}/movie/${searchQuery}?${API_KEY}`);
        const response = await axios.get(`${BASE_URL}/movie/${searchQuery}?${API_KEY}`)
        
        return response.data;
        
    } catch (error) {
        throw error
    }
}


export const getMoviesSearch = async (searchQuery) => {
    // const url = BASE_URL + requestUrl + API_KEY

    try {
        const response = await axios.get(`${BASE_URL}/search/movie?query=${searchQuery}&${API_KEY}`)
        // console.log(JSON.stringify(response, null , 2));

        return response.data;
        
    } catch (error) {
        throw error
        
    }
}