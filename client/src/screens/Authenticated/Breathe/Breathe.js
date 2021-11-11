import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import game from '../../../../public/game.png';
import { theme } from '../../../utils/Theme';

export default function Breathe({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={game} />
      <Text style={styles.title}>Stressful game</Text>
      <Text style={styles.title}>Other Breathing exercises</Text>
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
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
  },
  percent: {
    marginTop: 50,
    fontSize: 80,
    color: theme.blue,
    fontWeight: '700',
  },
});
