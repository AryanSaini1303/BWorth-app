import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';

const numColumns = 3;
const imageWidth = Dimensions.get('window').width / numColumns - 40; // setting image widht and height based on screen width and height to make it responsive

const imageGrid = [
  require('../assets/images/images1.png'),
  require('../assets/images/images2.png'),
  require('../assets/images/images3.png'),
  require('../assets/images/images4.png'),
  require('../assets/images/images5.png'),
  require('../assets/images/images6.png'),
  require('../assets/images/images7.png'),
  require('../assets/images/images8.png'),
  require('../assets/images/images10.png'),
];

const LoginScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.image}>
      <Image source={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={imageGrid}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          numColumns={numColumns}
          scrollEnabled={false}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <Image
          source={require('../assets/images/logo.jpeg')}
          style={styles.logo}
        />
        <Text style={styles.welcome}>Welcome</Text>
        <View style={styles.googleButton}>
          {/* use "Pressable" inside a "View" to stop the ripple effect from bleeding out*/}
          <Pressable
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) =>
              pressed
                ? { opacity: 0.5, transform: [{ scale: 0.96 }] }
                : { opacity: 1 }
            }
          >
            <Text style={styles.googleButtonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    backgroundColor: '#D9D9D9',
    margin: 20,
    padding: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'left',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  welcome: {
    fontSize: 40,
    color: '#000',
    marginVertical: 20,
    textAlign: 'left',
    width: '100%',
  },
  googleButton: {
    backgroundColor: 'black',
    borderRadius: 50,
    width: '100%',
    overflow: 'hidden',
  },
  googleButtonText: {
    paddingVertical: 12,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    overflow: 'hidden',
    width: '100%',
  },
});
