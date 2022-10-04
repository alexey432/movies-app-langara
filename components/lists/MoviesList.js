import React from 'react'
import { View, Text, FlatList } from 'native-base'
import MovieCard from '../listItems/MovieCard'

const MoviesList = ({ navigation, movies }) => {
    return (
       <FlatList 
            data={movies}
            renderItem={({ item }) => (
                <MovieCard navigation={navigation} movie={item} />
            )}
       />

    )
}

export default MoviesList
