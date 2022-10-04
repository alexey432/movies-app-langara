import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Center, Container, Text } from 'native-base'
import FormSearch from '../forms/FormSearch'
import { getMoviesSearch } from '../../services/api'
import Loading from '../layout/Loading'
import MoviesList from '../lists/MoviesList'

const SearchContainer = ({ navigation }) => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [movie, setMovie] = useState(null)
    const [movies, setMovies] = useState([])
    const [ selectType, setSelectType ] = useState("multi")

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
            setIsLoading(true)

            const data = await getMoviesSearch(movie, selectType)
            
            setMovies([...data.results])
            setIsLoading(false)
            
        } catch (error) {
            throw error
            
        }
        
    }

    const handleInputChange = movie => {
        setMovie(movie)
    }
    
    

    return (
        <>
        <Center px={4}>
            <FormSearch selectType={selectType} setSelectType={setSelectType} fetchMovies={fetchMovies} onInputChange={handleInputChange}/> 
        </Center>
        {  }
        {isLoading ? <Loading /> : <MoviesList navigation={navigation} movies={movies} type={'multi'}/>}
        </>
    )
}

export default SearchContainer
