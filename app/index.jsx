
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import {StyleSheet, Text,View} from 'react-native'; 
import {Link} from 'expo-router'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
    <Link href="/profile">Go to Profile</Link>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'SpaceMono',
    fontSize: 20,
  },
});
