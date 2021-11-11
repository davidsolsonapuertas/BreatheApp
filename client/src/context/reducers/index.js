import { LOGIN_SUCCESS, LOGOUT, REQUEST_LOGIN } from '../constants';

export const initialState = {
  user: null,
  token: null,
  loading: false,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...initialState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false,
      };
    case LOGOUT:
      return {
        ...initialState,
        user: '',
        token: '',
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
