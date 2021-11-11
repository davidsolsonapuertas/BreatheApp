import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, SafeAreaView, Text } from 'react-native';
import logo from '../../../public/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UnauthenticatedHome({ navigation }) {
  return (
    <LinearGradient style={styles.container} colors={['#00e6ff', '#1c1cd0']}>
      <SafeAreaView>
        <Image style={styles.image} source={logo} />

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Authenticated', { screen: 'Home' })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Authenticated', { screen: 'Home' })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

UnauthenticatedHome.propTypes = {
  navigation: PropTypes.shape(),
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  button: {
    width: '85%',
    borderRadius: 25,
    margin: 10,
    padding: 12,
    backgroundColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
  },
});
