import React, { useState, useEffect } from 'react'
import { View, Text, Center } from 'native-base'
import { FormControl, VStack, HStack,Input, Button, Icon, Select, CheckIcon, WarningOutlineIcon } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';
import FormTvShows from '../forms/FormTvShows';
import Loading from '../layout/Loading'
import { getTvShows } from '../../services/api';
import MoviesList from '../lists/MoviesList';


const TvShowsContainer = ({ navigation }) => {
    const [ selectChoice, setSelectChoice ] = useState("popular")
    const [ isLoading, setIsLoading ] = useState(false)
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        async function fetchMovies() {
            try {
                setIsLoading(true)

                const data = await getTvShows(selectChoice);
                
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
            <FormTvShows selectChoice={selectChoice} setSelectChoice={setSelectChoice} />
            {isLoading ? <Loading /> : <MoviesList navigation={navigation} movies={movies} type={'tv'}/>}
        </>
    )
}

export default TvShowsContainer
