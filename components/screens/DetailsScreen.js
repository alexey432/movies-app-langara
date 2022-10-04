import React, { useEffect, useState } from 'react'
import { View, Text, Box, HStack, VStack, Center, Image, Button } from 'native-base'
import { getSingleShow } from '../../services/api'
import { placeholderURL } from '../utils/constants'
import Loading from '../layout/Loading'


const DetailsScreen = ({ route, navigation }) => {
    const { showId, type } = route.params;
    const [ movie, setMovie ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    
    
    useEffect(() => {
        async function fetchMovies() {
            try {
                setIsLoading(true)
                const data = await getSingleShow(showId, type);
                
                setMovie(data)

                setIsLoading(false)
                navigation.setOptions({ title: data.original_title ? data.original_title : data.original_name })
                
            } catch (error) {
                throw error
                
            }
        }

        fetchMovies();
        
    }, [])


  return (
        <Center ml={10} pb={2} mt={10} >
            {isLoading ? <Loading /> : (
            <VStack space={2} alignItems='center' justifyContent="center" mr={10}>
                <Text mb={5} fontSize='lg' bold>{movie.original_title ? movie.original_title : movie.original_name}</Text>
                <Image mb={3} alt={'image'} source={{uri: movie.poster_path !== undefined && movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderURL}} size='2xl'/>
                <Text fontSize='sm'>{movie.overview}</Text>
                <HStack mt={3} alignSelf={'flex-start'}>
                    <Text fontSize='sm'>Popularity: {movie.popularity ? movie.popularity : 'N/A'}</Text>
                    <Text> | </Text>
                    <Text fontSize='sm'>Release Date: {movie.release_date ? movie.release_date : 'N/A'}</Text>
                </HStack>
            </VStack>
            )}
        </Center>
  )
}

export default DetailsScreen