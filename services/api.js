import axios from 'axios';
import { API_KEY, BASE_URL } from './api_config';

export const getMovieSearch = async (searchQuery) => {
    // const url = BASE_URL + requestUrl + API_KEY

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=c1fd8b01ce787640cca3d9df4292129c`)
        // console.log(JSON.stringify(response, null , 2));

        return response.data;
        
    } catch (error) {
        throw error
        
    }
}