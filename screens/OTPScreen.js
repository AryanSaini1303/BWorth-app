import { useRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';

export default function OTPScreen({ navigation, route }) {
  const [otp, setOtp] = useState({
    optNum1: '',
    optNum2: '',
    optNum3: '',
    optNum4: '',
  });

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleChange = (field, value) => {
    if (!/^\d?$/.test(value)) return; // Allow only digits
    setOtp((prev) => {
      const updated = { ...prev, [field]: value };
      // Handle forward navigation
      if (value) {
        if (field === 'optNum1') input2Ref.current.focus();
        else if (field === 'optNum2') input3Ref.current.focus();
        else if (field === 'optNum3') input4Ref.current.focus();
      }
      return updated;
    });
  };

  const phoneNumber = route.params?.phoneNumber;
  console.log(phoneNumber);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter OTP Number</Text>

      <View style={styles.otpContainer}>
        <TextInput
          ref={input1Ref}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="number-pad"
          onChangeText={(value) => handleChange('optNum1', value)}
          value={otp.optNum1}
        />
        <TextInput
          ref={input2Ref}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="number-pad"
          onChangeText={(value) => handleChange('optNum2', value)}
          value={otp.optNum2}
        />
        <TextInput
          ref={input3Ref}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="number-pad"
          onChangeText={(value) => handleChange('optNum3', value)}
          value={otp.optNum3}
        />
        <TextInput
          ref={input4Ref}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="number-pad"
          onChangeText={(value) => handleChange('optNum4', value)}
          value={otp.optNum4}
        />
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn't receive code?{' '}
          <Text
            style={styles.resendPressable}
            onPress={() => console.log('Resend')}
          >
            Resend
          </Text>
        </Text>
      </View>

      <View style={styles.submitContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.submitButton,
            pressed &&
              Platform.OS === 'ios' && {
                opacity: 0.6,
                transform: [{ scale: 0.98 }],
              },
          ]}
          android_ripple={{ color: '#aaa' }}
          onPress={() => {
            const fullOtp = `${otp.optNum1}${otp.optNum2}${otp.optNum3}${otp.optNum4}`;
            console.log('OTP Submitted:', fullOtp);
          }}
        >
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 100,
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  resendContainer: {
    marginBottom: 40,
  },
  resendText: {
    fontSize: 14,
    color: '#333',
  },
  resendPressable: {
    color: '#007bff',
    fontWeight: '500',
  },
  submitContainer: {
    alignItems: 'center',
    borderRadius: 30,
    overflow: 'hidden',
  },
  submitButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 30,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
