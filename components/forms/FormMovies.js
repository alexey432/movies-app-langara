import React from 'react'
import { View, Text, Center } from 'native-base'
import { FormControl, VStack, HStack,Input, Button, Icon, Select, CheckIcon, WarningOutlineIcon } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';

const FormMovies = ({ selectChoice, setSelectChoice }) => {


  return (
    <VStack space={2} width='100%' py={5}>
            <FormControl isRequired>
                <Center width='100%' space={2}>
                <Select selectedValue={selectChoice} 
                    minWidth="200" 
                    accessibilityLabel="Choose Service" 
                    placeholder="Choose Service" 
                    _selectedItem={{
                        bg: "teal.600",
                        color: '#fff',
                        endIcon: <CheckIcon size={5} color='#fff' />
                    }} 
                    mt={1} 
                    onValueChange={itemValue => setSelectChoice(itemValue)}
                    >
                    <Select.Item label="now_playing" value="now_playing" />
                    <Select.Item label="popular" value="popular" />
                    <Select.Item label="top_rated" value="top_rated" />
                    <Select.Item label="upcoming" value="upcoming" />
                    </Select>
                    
                </Center>
            </FormControl>
        </VStack>
  )
}

export default FormMovies