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


export const getMoviesSearch = async (searchQuery, typeOfQuery) => {
    // const url = BASE_URL + requestUrl + API_KEY
    // movies
    // https://api.themoviedb.org/3/search/movie?query=james%20bond
    // multi
    // https://api.themoviedb.org/3/search/multi?query=james%20bond
    // tv
    // https://api.themoviedb.org/3/search/tv?query=james%20bond
    console.log(`${BASE_URL}/search/${typeOfQuery}?${API_KEY}&query=${searchQuery}`);
    
    try {
        const response = await axios.get(`${BASE_URL}/search/${typeOfQuery}?${API_KEY}&query=${searchQuery}`)
        // console.log(JSON.stringify(response, null , 2));

        return response.data;
        
    } catch (error) {
        throw error
        
    }
}