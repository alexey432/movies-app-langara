import React from 'react'
import { View, Text, Center } from 'native-base'
import { FormControl, VStack, Select, CheckIcon } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';

const FormTvShows = ({ selectChoice, setSelectChoice }) => {


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
                    <Select.Item label="airing_today" value="airing_today" />
                    <Select.Item label="on_the_air" value="on_the_air" />
                    <Select.Item label="popular" value="popular" />
                    <Select.Item label="top_rated" value="top_rated" />
                    </Select>
                    
                </Center>
            </FormControl>
        </VStack>
  )
}

export default FormTvShows