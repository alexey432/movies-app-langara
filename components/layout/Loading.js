import React from 'react'
import { Center, Text, HStack, Spinner, Heading } from 'native-base'

const Loading = () => {
    return (
        <Center>
            <HStack space={2} justifyContent="center">
                <Spinner color="black" accessibilityLabel="Loading" />
                <Heading color="black" fontSize="md">
                    Loading
                </Heading>
            </HStack>
        </Center>
    )
}

export default Loading
