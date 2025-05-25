import LoginScreen from './screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import LoginOptionsScreen from './screens/LoginOptionsScreen';
import { StatusBar } from 'react-native';
import OTPScreen from './screens/OTPScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerTitle: '', headerShadowVisible: false }}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login Options" component={LoginOptionsScreen} />
            <Stack.Screen name="OTP Screen" component={OTPScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
