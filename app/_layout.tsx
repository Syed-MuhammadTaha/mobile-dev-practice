import { StyleSheet, Text, View } from 'react-native'
import {SplashScreen, Stack} from 'expo-router'
import {useFonts} from 'expo-font'
import { useEffect } from 'react'
SplashScreen.preventAutoHideAsync()
const RootLayout = () => {
  const [loaded, err] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  })
  useEffect(() => {
    if (loaded && !err) {
      SplashScreen.hideAsync()
    }
  }, [loaded, err])

  return (
    <Stack >
        <Stack.Screen name="index" />
    </Stack>
  )
}
export default RootLayout
