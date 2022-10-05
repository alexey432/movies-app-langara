import { FormControl, VStack, Select, CheckIcon, Center } from 'native-base'
import React from 'react'

const FormTvAndMovie = ({ selectChoice, setSelectChoice, choices }) => {
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
                    {choices ? choices.map((item, index) => {
                        return <Select.Item key={index} label={item} value={item} />
                    }) : null}
                </Select>
            </Center>
        </FormControl>
    </VStack>
  )
}

export default FormTvAndMovie