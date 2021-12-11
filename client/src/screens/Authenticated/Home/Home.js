import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, Text, Dimensions } from 'react-native';
import logo from '../../../../public/logo.png';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
  const name = 'David';
  const screenWidth = Dimensions.get('window').width;

  return (
    <LinearGradient style={styles.container} colors={['#00e6ff', '#1c1cd0']}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.image} source={logo} />
        <Text style={styles.title}>Hi, {name}</Text>
        <Text style={styles.text}>What can I help you with today?</Text>
        {/* <Text style={styles.percent}>78%</Text>
        <Text style={styles.text}>Your stress levels</Text> */}
        <TouchableOpacity
          style={styles.button(screenWidth)}
          onPress={() =>
            navigation.navigate('Authenticated', { screen: 'Breathe' })
          }
        >
          <Text style={styles.text}>Breathing exercises</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lastButton(screenWidth)}
          onPress={() =>
            navigation.navigate('Authenticated', { screen: 'Advice' })
          }
        >
          <Text style={styles.text}>News</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape(),
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  button: (width) => ({
    backgroundColor: 'rgba(250,250,250,0.5)',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    height: 200,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  lastButton: (width) => ({
    ...styles.button(width),
    marginBottom: 40,
  }),
  image: {
    width: 400,
    height: 200,
    marginTop: 100,
  },
  title: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: '700',
    color: 'white',
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
    color: 'white',
  },
  percent: {
    marginTop: 50,
    fontSize: 80,
    color: 'pink',
    fontWeight: '700',
  },
});
