import React, { useState, useEffect } from 'react'
import { View, Text, Center } from 'native-base'
import { FormControl, VStack, HStack,Input, Button, Icon, Select, CheckIcon, WarningOutlineIcon } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';
import FormMovies from '../forms/FormMovies';
import Loading from '../layout/Loading'
import { getMovies } from '../../services/api';
import MoviesList from '../lists/MoviesList';


const MoviesContainer = ({ navigation }) => {
    const [ selectChoice, setSelectChoice ] = useState("popular")
    const [ isLoading, setIsLoading ] = useState(false)
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        async function fetchMovies() {
            try {
                setIsLoading(true)


                const data = await getMovies(selectChoice);

                // console.log(JSON.stringify(data, null, 2));
                
                setMovies([...data.results])
                setIsLoading(false)
                
            } catch (error) {
                throw error
                
            }
        }

        fetchMovies();

    }, [selectChoice]);
   

    return (
        <>
            <FormMovies selectChoice={selectChoice} setSelectChoice={setSelectChoice} />
            {isLoading ? <Loading /> : <MoviesList navigation={navigation} movies={movies} />}
        </>
    )
}

export default MoviesContainer
