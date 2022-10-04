import React from 'react'
import { View, Text } from 'react-native'
import SearchContainer from '../containers/SearchContainer'

const SearchScreen = ({ navigation }) => {
    return (
        <SearchContainer navigation={navigation}/>
    )
}

export default SearchScreen
