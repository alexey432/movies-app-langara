import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { FormControl, VStack, HStack,Input, Button, Icon, Select, CheckIcon, WarningOutlineIcon, Box } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';
import { placeholderURL, blueActive } from '../utils/constants'

const FormSearch = (props) => {
    const { onInputChange, fetchMovies, selectType, setSelectType, movie, setPage } = props

    const onSubmit = () => {
        if(movie !== '') {
            fetchMovies()
            setPage(1)
        }
    }

    return (
        <VStack space={2} width='100%' py={5} >
            <FormControl isRequired>
                <Box width='100%'>
                    <FormControl.Label>Movie Title</FormControl.Label>
                    <Input 
                        placeholder='i.e. James Bond'
                        variant='filled' 
                        bg='gray.200'
                        width='95%'
                        px={3}
                        onChangeText={value => {
                            onInputChange(value)
                        }}
                        InputLeftElement={
                            <Icon size={5} ml={2} color={'gray.400'} as={<Ionicons name="ios-search" />} />
                        }
                    />
                    <FormControl.ErrorMessage>
                        Please fill in the input form!
                    </FormControl.ErrorMessage>
                </Box>
            </FormControl>

            <FormControl isRequired>
                <FormControl.Label>Choose Search Type</FormControl.Label>
                <HStack width='100%' space={2}>
                    <Select selectedValue={selectType} 
                        minWidth="240" 
                        accessibilityLabel="Choose Service" 
                        placeholder="Choose Service" 
                        _selectedItem={{
                            bg: "teal.600",
                            color: '#fff',
                            endIcon: <CheckIcon size={5} color='#fff' />
                        }} 
                        mt={1} 
                        onValueChange={itemValue => setSelectType(itemValue)}>
                        <Select.Item label="movie" value="movie" />
                        <Select.Item label="multi" value="multi" />
                        <Select.Item label="tv" value="tv" />
                        </Select>
                        
                        <Button
                            style={{backgroundColor: '#06b6d4' }}
                            onPress={onSubmit}
                            leftIcon={
                                <Icon size={5} ml={2} color={'#fff'} as={<Ionicons name="ios-search" />} />
                            }
                        >Search</Button>
                </HStack>
                <FormControl.HelperText>
                    Please select a search type
                </FormControl.HelperText>
            </FormControl>
        </VStack>
    )
}

export default FormSearch
