
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import {StyleSheet, Text,View, ScrollView} from 'react-native'; 
import {Link} from 'expo-router'
import {useFonts} from 'expo-font'
import {SafeAreaView} from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton';
import {StatusBar} from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded, err] = useFonts({
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
  })
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView> 
      <View>
        <Text>Onboarding Image goes here</Text>
      </View>
      <View>
        <CustomButton />
      </View>
    </ScrollView>
    <StatusBar style='dark'/>
    </SafeAreaView>);
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
    fontWeight: 'bold',
  },
});
