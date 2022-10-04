import React from 'react'
import MoviesContainer from '../containers/MoviesContainer'

const MoviesScreen = ({ navigation }) => {
    console.log(navigation);

    return (
        <MoviesContainer navigation={navigation} />
    )
}

export default MoviesScreen
