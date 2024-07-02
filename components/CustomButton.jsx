import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, isLoading}) => {
  return (
    <TouchableOpacity
        onPress ={handlePress}
        
    >

        <Text>Click me</Text>
    </TouchableOpacity>
  )
}

export default CustomButton