import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Center, Container, Text } from 'native-base'
import FormSearch from '../forms/FormSearch'
import { getMovieSearch } from '../../services/api'
import Loading from '../layout/Loading'
import MoviesList from '../lists/MoviesList'

const SearchContainer = ({ navigation }) => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [movie, setMovie] = useState(null)
    const [movies, setMovies] = useState([])

    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=resident&api_key=c1fd8b01ce787640cca3d9df4292129c`)
    //             // console.log(JSON.stringify(response, null , 2));
    //             console.log('CHECK: ', JSON.stringify(response.data.results, null, 2));
    //             setMovies([...response.data.results])
    //             response.data.results.map(item => {
    //                 console.log(item.original_title);
                    
    //             })
                
    //         } catch (error) {
    //             throw error
                
    //         }
    //     }   

    //     getData()
    // }, [])

    const fetchMovies = async () => {
        try {
            console.log(movie);
            
            setIsLoading(true)
            // const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=c1fd8b01ce787640cca3d9df4292129c`)
            const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=c1fd8b01ce787640cca3d9df4292129c&language=en-US&query=${movie}`)
            console.log(response.data.results.length);
            
            setMovies([...response.data.results])
            setIsLoading(false)
            
        } catch (error) {
            throw error
            
        }

        // getMovieSearch(movie).then(movies => {
        //     // console.log('check: ', movies);
        //     // setMovies(movies)
        // })

        
    }

    const handleInputChange = movie => {
        setMovie(movie)
    }

    // console.log(JSON.stringify(movies[1], null, 2));
    
    

    return (
        <>
        <Center px={4}>
            <FormSearch fetchMovies={fetchMovies} onInputChange={handleInputChange}/> 
        </Center>
        {  }
        {isLoading ? <Loading /> : <MoviesList navigation={navigation} movies={movies} />}
        </>
    )
}

export default SearchContainer
