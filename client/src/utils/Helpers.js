import { SERVER_URL } from './Constants';
import { CommonActions } from '@react-navigation/native';

export const loginRequest = (values) => {
  return postRequest('login', {
    body: values,
  });
};

export const signinRequest = (values) => {
  return postRequest('signin', {
    body: values,
  });
};

const postRequest = async (endpoint, options) => {
  return fetch(`${SERVER_URL}/api/${endpoint}`, {
    body: options.body ? JSON.stringify(options.body) : null,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((r) => r.json());
};

export const fetchArticles = async () => {
  return fetch(
    `https://newsapi.org/v2/everything?q=relaxation+exercises+tips&sortBy=popularity&apiKey=e32b2031915e41e6a1cb25c2eae49772`,
    {
      method: 'GET',
    },
  ).then((r) => r.json());
};

export const resetStackAndNavigate = (navigation, path) => {
  navigation.dispatch(
    CommonActions.reset({ index: 0, routes: [{ name: path }] }),
  );
};
