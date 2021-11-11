import React, { useState } from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useForm } from '../../../utils/CustomHooks';
import { resetStackAndNavigate } from '../../../utils/Helpers';
import UnauthenticatedScreen from '../../../components/UnauthenticatedScreen/UnauthenticatedScreen';
import { registerUser, useAuthDispatch } from '../../../context';

export default function Signin({ navigation }) {
  const [, setErrors] = useState();

  const dispatch = useAuthDispatch();

  const { onChange, onSubmit, values } = useForm(
    async () => {
      if (allFieldsReady()) {
        const req = await registerUser(dispatch, values);

        console.log('heeey', req);
        if (req?.token) {
          resetStackAndNavigate(navigation, 'Authenticated', {
            screen: 'Home',
          });
        } else if (req?.errors) {
          setErrors(req.errors);
        }
      }
    },
    {
      username: '',
      firstName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  );

  const allFieldsReady = () => {
    const usernameLength =
      values?.username.length > 0 && values?.username.length < 18;

    const firstNameLength =
      values?.firstName.length > 0 && values?.username.length < 18;

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = emailRegex.test(String(values?.email).toLowerCase());

    const passwordRegex = /^.{8,50}$/;
    const password = passwordRegex.test(String(values?.password));

    const confirmPassword = values?.password === values?.confirmPassword;

    return (
      usernameLength && firstNameLength && email && password && confirmPassword
    );
  };

  return (
    <UnauthenticatedScreen
      allFieldsReady={allFieldsReady}
      buttonText='Register'
      onSubmit={onSubmit}
      bottomText={
        <Text style={styles.bottomText}>
          Already have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{ color: 'blue' }}
          >
            Log in
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
        placeholder='First Name'
        value={values.firstName}
        autoCompleteType='name'
        onChangeText={(e) => onChange(e, 'firstName')}
        style={styles.field}
        placeholderTextColor='grey'
      />
      <TextInput
        placeholder='Email'
        autoCompleteType='email'
        keyboardType='email-address'
        value={values.email}
        autoCapitalize='none'
        onChangeText={(e) => onChange(e, 'email')}
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
      <TextInput
        placeholder='Confirm Password'
        secureTextEntry={true}
        value={values.confirmPassword}
        onChangeText={(e) => onChange(e, 'confirmPassword')}
        style={styles.field}
        placeholderTextColor='grey'
      />
    </UnauthenticatedScreen>
  );
}

Signin.propTypes = {
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
