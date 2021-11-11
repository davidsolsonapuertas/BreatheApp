import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import stat from '../../../../public/stat.png';
import { theme } from '../../../utils/Theme';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={stat} />
      <Text style={styles.title}>Your heart rate today</Text>
      <Text style={styles.percent}>78%</Text>
      <Text style={styles.text}>Your stress levels</Text>
    </SafeAreaView>
  );
}

Home.propTypes = {
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