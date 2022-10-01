import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { FormControl, VStack, HStack,Input, Button, Icon, Select, CheckIcon, WarningOutlineIcon } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';

const FormSearch = (props) => {
    const { onInputChange, fetchMovies } = props
    const [ formData, setFormData ] = useState({});

    const onSubmit = () => {
        fetchMovies()
    }

    return (
        <VStack space={2} width='100%' py={5}>
            <FormControl isRequired>
                <HStack width='100%' space={2}>
                    <FormControl.Label>Movie Title</FormControl.Label>
                    <Input 
                        placeholder='i.e. James Bond'
                        variant='filled' 
                        bg='gray.200'
                        width='100%'
                        px={3}
                        onChangeText={value => {
                            setFormData({ ...formData, movie: value })
                            onInputChange(value)
                        }}
                        InputLeftElement={
                            <Icon size={5} ml={2} color={'gray.400'} as={<Ionicons name="ios-search" />} />
                        }
                    />
                </HStack>
                <FormControl>

                <HStack width='100%' space={2}>
                <Select selectedValue={"multi"} 
                    minWidth="200" 
                    accessibilityLabel="Choose Service" 
                    placeholder="Choose Service" 
                    _selectedItem={{
                        bg: "teal.600",
                        color: '#fff',
                        endIcon: <CheckIcon size={5} color='#fff' />
                    }} 
                    mt={1} 
                    onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="movie" value="movie" />
                    <Select.Item label="multi" value="multi" />
                    </Select>
                    
                    <Button
                        onPress={onSubmit}
                        leftIcon={
                            <Icon size={5} ml={2} color={'#fff'} as={<Ionicons name="ios-search" />} />
                        }
                    >Search</Button>
                </HStack>
                </FormControl>
                <FormControl.ErrorMessage>
                    Please fill in the input form!
                    </FormControl.ErrorMessage>
            </FormControl>
        </VStack>
    )
}

export default FormSearch
