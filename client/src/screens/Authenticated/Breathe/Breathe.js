import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import game from '../../../../public/breathe.jpg';
import { theme } from '../../../utils/Theme';

export default function Breathe({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={game} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Participate in study</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ExerciseOne')}
      >
        <Text style={styles.text}>4-7-8 breathing exercise</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

Breathe.propTypes = {
  navigation: PropTypes.shape(),
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 200,
  },
  button: {
    backgroundColor: theme.blue,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    height: 200,
    width: '95%',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
