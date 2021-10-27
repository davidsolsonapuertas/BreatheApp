import React from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useForm } from '../../../utils/CustomHooks';
import { loginRequest, resetStackAndNavigate } from '../../../utils/Helpers';
import UnauthenticatedScreen from '../../../components/UnauthenticatedScreen/UnauthenticatedScreen';

export default function Login({ navigation }) {
  const { onChange, onSubmit, values } = useForm(
    () => {
      if (allFieldsReady()) {
        loginRequest(values);
        resetStackAndNavigate(navigation, 'Authenticated', {
          screen: 'Home',
        });
      }
    },
    {
      username: '',
      password: '',
    },
  );

  const allFieldsReady = () => {
    const usernameLength =
      values?.username.length > 0 && values?.username.length < 18;

    const passwordRegex = /^.{8,30}$/;
    const password = passwordRegex.test(String(values?.password));

    return usernameLength && password;
  };

  return (
    <UnauthenticatedScreen
      allFieldsReady={allFieldsReady}
      buttonText='Log in'
      onSubmit={onSubmit}
      bottomText={
        <Text style={styles.bottomText}>
          Don't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Signin')}
            style={{ color: 'blue' }}
          >
            Sign in
          </Text>
        </Text>
      }
    >
      <TextInput
        placeholder='Username'
        name='username'
        autoCompleteType='username'
        value={values.username}
        autoCapitalize='none'
        onChangeText={(e) => onChange(e, 'username')}
        style={styles.field}
        placeholderTextColor='grey'
      />
      <TextInput
        placeholder='Password'
        secureTextEntry={true}
        value={values.password}
        onChangeText={(e) => onChange(e, 'password')}
        style={styles.field}
        placeholderTextColor='grey'
      />
    </UnauthenticatedScreen>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape(),
};

const styles = StyleSheet.create({
  field: {
    margin: 10,
    padding: 12,
    width: '85%',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    color: 'black',
    borderRadius: 5,
  },
});
