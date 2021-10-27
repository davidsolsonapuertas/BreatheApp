import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, SafeAreaView, View } from 'react-native';

export default function Home({ navigation }) {
  return <View style={styles.container}></View>;
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
});
