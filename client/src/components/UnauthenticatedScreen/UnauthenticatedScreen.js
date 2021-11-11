import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import logo from '../../../public/logoblack.png';
import logoblue from '../../../public/logoblue.png';
import { theme } from '../../utils/Theme';

export default function UnauthenticatedScreen({
  children,
  onSubmit,
  allFieldsReady,
  buttonText,
  bottomText,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={allFieldsReady() ? logoblue : logo} />
      <Text style={styles.titleText}>Welcome to Just Breathe</Text>
      {children}
      <TouchableOpacity
        onPress={onSubmit}
        style={[
          styles.button,
          {
            backgroundColor: allFieldsReady() ? theme.blue : 'gray',
          },
        ]}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      {bottomText}
    </SafeAreaView>
  );
}

UnauthenticatedScreen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  allFieldsReady: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  bottomText: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: -20,
  },
  button: {
    width: '85%',
    borderRadius: 25,
    margin: 20,
    padding: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
  bottomText: {
    color: 'gray',
    marginTop: 3,
  },
});
