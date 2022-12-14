import React from 'react'
import MoviesContainer from '../containers/MoviesContainer'
import { Text } from 'react-native'

const MoviesScreen = ({ navigation }) => {

    return (
        <MoviesContainer navigation={navigation} />
    )
}

export default MoviesScreen
