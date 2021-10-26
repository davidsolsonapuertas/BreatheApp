import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import logo from '../../../public/logo.png';

export default function UnauthenticatedHome({ navigation }) {
  console.log(navigation);
  return (
    <LinearGradient style={styles.container} colors={['#00e6ff', '#1c1cd0']}>
      <SafeAreaView>
        <Image style={styles.image} source={logo} />
        <Button
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
          title='Learn More'
          color='white'
        />
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
    color: 'white',
  },
});
