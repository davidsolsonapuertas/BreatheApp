import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import { useForm } from '../utils/CustomHooks';

export default function Login() {
  const { onChange, onSubmit, values } = useForm(() => {}, {
    username: '',
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const allFieldsReady = () => {
    const usernameLength =
      values?.username.length > 0 && values?.username.length < 18;

    const firstNameLength =
      values?.firstName.length > 0 && values?.username.length < 18;

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = emailRegex.test(String(values?.email).toLowerCase());

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const password = passwordRegex.test(String(values?.password));

    const confirmPassword = values?.password === values?.confirmPassword;

    return (
      usernameLength && firstNameLength && email && password && confirmPassword
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Username'
        name='username'
        autoCompleteType='username'
        value={values.username}
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

      <TouchableOpacity
        // onPress={() => navigation.navigate('Login')}
        style={[
          styles.button,
          {
            backgroundColor: allFieldsReady() ? '#4169e1' : 'gray',
          },
        ]}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  field: {
    margin: 10,
    padding: 12,
    width: '85%',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    color: 'gray',
    borderRadius: 5,
  },
  button: {
    width: '85%',
    borderRadius: 25,
    margin: 10,
    padding: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});
