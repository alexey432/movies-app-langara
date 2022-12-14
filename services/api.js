import axios from 'axios';
import { API_KEY, BASE_URL } from './api_config';


export const getSingleShow = async (movieId, type) => {
    try {
        const response = await axios.get(`${BASE_URL}/${type}/${movieId}?${API_KEY}`)
        
        return response.data;
        
    } catch (error) {
        throw error
    }
}

export const getMovies = async (searchQuery, page) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${searchQuery}?${API_KEY}&page=${page}`)
        
        return response.data;
        
    } catch (error) {
        throw error
    }
}

export const getTvShows = async (searchQuery, page) => {
    try {
        const response = await axios.get(`${BASE_URL}/tv/${searchQuery}?${API_KEY}&page=${page}`)
        
        return response.data;
        
    } catch (error) {
        throw error
    }
}


export const getMoviesSearch = async (searchQuery, typeOfQuery, page) => {

    try {
        const response = await axios.get(`${BASE_URL}/search/${typeOfQuery}?${API_KEY}&query=${searchQuery}&page=${page}`)
        return response.data;
        
    } catch (error) {
        throw error
        
    }
}