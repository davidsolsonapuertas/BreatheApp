import { loginRequest, signinRequest } from '../../utils/Helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_SUCCESS, LOGOUT, REQUEST_LOGIN } from '../constants';

export async function loginUser(dispatch, payload) {
  try {
    dispatch({ type: REQUEST_LOGIN });
    let response = await loginRequest(payload);
    let data = await response.json();

    if (data.user) {
      dispatch({ type: LOGIN_SUCCESS, payload: data });

      try {
        await AsyncStorage.setItem('currentUser', data.user);
        await AsyncStorage.setItem('token', data.token);
      } catch (e) {
        throw new Error();
      }
      return data;
    }

    return;
  } catch (e) {
    throw new Error(e);
  }
}

export async function registerUser(dispatch, payload) {
  try {
    dispatch({ type: REQUEST_LOGIN });
    const data = await signinRequest(payload);

    if (data.user) {
      dispatch({ type: LOGIN_SUCCESS, payload: data });

      try {
        await AsyncStorage.setItem('currentUser', JSON.stringify(data.user));
        await AsyncStorage.setItem('token', JSON.stringify(data.token));
      } catch (e) {
        throw new Error(e);
      }
      return data;
    }

    return;
  } catch (e) {
    throw new Error(e);
  }
}

export async function logout(dispatch) {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}
