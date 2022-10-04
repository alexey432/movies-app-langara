import React from 'react'
import { View, Text, Box, HStack,VStack, Center, Image, Button } from 'native-base'
import { placeholderURL } from '../utils/constants'

const MovieCard = ({ navigation, movie, type }) => {

    return (
        <Box pb={2} mb={1}>
            <HStack space={2} alignItems='center' ml={2} mr={20} style={{ maxWidth: 250 }}>
                <Image alt={'image'} source={{uri: movie.poster_path !== undefined && movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderURL}} size='xl'/>
                <VStack space={1} alignItems='flex-start'>
                    <Text fontSize='md' bold>{movie.original_title !== undefined ? movie.original_title : movie.original_name}</Text>
                    <Text fontSize='sm'>Popularity: {movie.popularity ? movie.popularity : 'N/A'}</Text>
                    <Text fontSize='sm'>ID: {movie.id ? movie.id : 'N/A'}</Text>
                    <Text fontSize='sm'>Release Date: {movie.release_date ? movie.release_date : 'N/A'}</Text>
                    <Button style={{ backgroundColor: '#06b6d4', width: 200, height: 40 }} onPress={() => navigation.navigate('Details', { showId: movie.id, type: type !== 'multi' ? type : movie.media_type })}>More Details</Button>
                </VStack>
            </HStack>
        </Box>
    )
}

export default MovieCard
