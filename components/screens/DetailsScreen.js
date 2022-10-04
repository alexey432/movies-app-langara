import React, { useEffect } from 'react'
import { View, Text, Box, HStack, VStack, Center, Image, Button } from 'native-base'

const DetailsScreen = ({ route, navigation }) => {
    const { movie } = route.params;
    
    
    useEffect(() => {
        navigation.setOptions({ title: movie.original_title })
    }, [])

  return (
        <Center pb={2} mt={10} >
            <VStack space={2} alignItems='center' justifyContent="center" ml={10} mr={10}>
                <Text mb={5} fontSize='lg' bold>{movie.original_title}</Text>
                <Image mb={3} alt={'image'} source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} size='2xl'/>
                <Text fontSize='sm'>{movie.overview}</Text>
                <HStack ml={3} mt={3}>
                    <Text fontSize='sm'>Popularity: {movie.popularity}</Text>
                    <Text> | </Text>
                    <Text fontSize='sm'>Release Date: {movie.release_date}</Text>
                </HStack>
            </VStack>
        </Center>
  )
}

export default DetailsScreen