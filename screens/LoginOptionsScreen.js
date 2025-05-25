import { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';

export default function LoginOptionsScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumber = (text) => {
    setPhoneNumber(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Phone Number</Text>
      <View style={styles.phoneNumberContainer}>
        <TextInput
          placeholder="Phone number"
          keyboardType="number-pad"
          onChangeText={handlePhoneNumber}
          value={phoneNumber}
          style={styles.input}
        />
        <View style={styles.pressableContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.loginButton,
              pressed &&
                Platform.OS === 'ios' && {
                  opacity: 0.5,
                  transform: [{ scale: 0.98 }],
                },
            ]}
            android_ripple={{ color: 'grey' }}
            onPress={() => {
              phoneNumber.length === 10
                ? navigation.navigate('OTP Screen', { phoneNumber })
                : alert('Please enter a valid phone number');
            }}
          >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.or}>OR</Text>
      <View style={styles.googleLoginContainer}>
        <View style={styles.pressableContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.googleButton,
              pressed &&
                Platform.OS === 'ios' && {
                  opacity: 0.5,
                  transform: [{ scale: 0.98 }],
                },
            ]}
            android_ripple={{ color: '#ccc' }}
          >
            <Image
              source={require('../assets/images/googleLogo.png')}
              style={styles.googleLogo}
            />
            <Text style={styles.googleText}>Continue with Google</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 100,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  loginButton: {
    backgroundColor: '#000',
    borderRadius: 50,
    paddingVertical: 12,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  or: {
    textAlign: 'center',
    color: '#4A90E2',
    marginVertical: 30,
    fontWeight: '500',
  },
  googleLoginContainer: {
    alignItems: 'center',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 18,
    backgroundColor: '#fff',
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  googleText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  pressableContainer: {
    overflow: 'hidden',
    borderRadius: 50,
  },
});
