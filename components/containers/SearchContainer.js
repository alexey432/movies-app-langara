import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Center, Container, Text } from 'native-base'
import FormSearch from '../forms/FormSearch'
import { getMoviesSearch } from '../../services/api'
import Loading from '../layout/Loading'
import MoviesList from '../lists/MoviesList'
import Pager from '../utils/Pager'

const SearchContainer = ({ navigation }) => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [movie, setMovie] = useState('')
    const [movies, setMovies] = useState([])
    const [ selectType, setSelectType ] = useState("multi")
    const [ searchInitiated, setSearchInitiated ] = useState(false)
    const [ page, setPage ] = useState(1)
    const [ totalPages, setTotalPages ] = useState(1)

    const fetchMovies = async () => {
        try {
            setIsLoading(true)

            setSearchInitiated(true)

            const data = await getMoviesSearch(movie, selectType, page)
            
            setMovies([...data.results])

            // in API docs the maximum page that can be requested is 1000 
            setTotalPages(data.total_pages > 1000 ? 1000 : data.total_pages)
            console.log(data.total_pages);
            
            setIsLoading(false)
            
        } catch (error) {
            throw error   
        }
    }

    useEffect(() => {
        if(movies.length > 0) {
            fetchMovies()
        }
    }, [page])

    const handleInputChange = movie => {
        setMovie(movie)
    }
    

    return (
        <>
        <Center px={4}>
            <FormSearch selectType={selectType} setSelectType={setSelectType} fetchMovies={fetchMovies} onInputChange={handleInputChange} movie={movie} setPage={setPage}/> 
        </Center>
        
        { searchInitiated ? 
            isLoading ? <Loading /> : movies.length > 0 ? <>
                <Text ml={2}>Total pages: {totalPages}</Text>
                <MoviesList navigation={navigation} movies={movies} type={'multi'}/>
                <Pager page={page} setPage={setPage} totalPages={totalPages} />
            </> : <Center mt={20}>
                <Text fontSize={'xl'}>No results</Text>
            </Center>
        : <Center mt={20}>
                <Text fontSize={'xl'}>Please initiate a search</Text>
            </Center>}
        </>
    )
}

export default SearchContainer
