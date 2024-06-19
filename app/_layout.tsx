import { StyleSheet, Text, View } from 'react-native'
import {Slot, Stack} from 'expo-router'
import {useFonts} from 'expo-font'
const RootLayout = () => {
  const [loaded] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  })
  return (
    <Stack >
        <Stack.Screen name="index" />
    </Stack>
  )
}

export default RootLayout
