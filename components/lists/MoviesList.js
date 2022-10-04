import React from 'react'
import { View, Text, FlatList } from 'native-base'
import MovieCard from '../listItems/MovieCard'

const MoviesList = ({ navigation, movies, type }) => {
    return (
       <FlatList 
            data={movies}
            renderItem={({ item }) => (
                <MovieCard navigation={navigation} movie={item} type={type}/>
            )}
       />

    )
}

export default MoviesList
