import {  HStack, Button, Icon, Center, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const Pager = ({ page, setPage, totalPages }) => {
  return (
    <Center>
        <HStack p={5} gap={2}>
            <Button
                onPress={() => {
                if(page > 1){
                    const newPage = page - 1;
                    setPage(newPage)
                }
            }}
                style={{backgroundColor: '#06b6d4' }}
                leftIcon={
                    <Icon size={5} ml={2} color={'#fff'} as={<Ionicons name="arrow-back" />} />
                }
            ></Button>
            <Text alignSelf={'center'} px={4}>{page}</Text>
            <Button
                style={{backgroundColor: '#06b6d4' }}
                onPress={() => {
                    if(page < totalPages){
                        const newPage = page + 1;
                        setPage(newPage)
                    }
                }}
                leftIcon={
                    <Icon size={5} ml={2} color={'#fff'} as={<Ionicons name="arrow-forward" />} />
                }
            ></Button>
        </HStack>
    </Center>
  )
}

export default Pager