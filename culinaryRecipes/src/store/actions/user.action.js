import {URL_API_SIGNIN, URL_API_SIGNUP} from '../../config/endpoint';
import {save} from '../../service/usersService';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';

export const signup = (name, address, email, password) => {
  return async dispatch => {
    try {
      const response = await fetch(URL_API_SIGNUP, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      console.log(data);
      await save({name, address, email});
      dispatch({
        type: SIGNUP,
        user: data,
        islogged: true,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
export const signin = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch(URL_API_SIGNIN, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      console.log(data);
      dispatch({
        type: SIGNIN,
        user: data,
        islogged: true,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
export const logout = () => {
  return dispatch => {
    try {
      dispatch({
        type: LOGOUT,
        token: null,
        userId: null,
        email: null,
        islogged: false,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
