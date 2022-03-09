import {LOGOUT, SIGNIN, SIGNUP} from '../actions/user.action';

const initialState = {
  user: null,
  islogged: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        user: action.user,
        islogged: action.islogged,
      };
    case SIGNIN:
      return {
        ...state,
        user: action.user,
        islogged: action.islogged,
      };
    case LOGOUT:
      return {
        ...state,
        user: action.user,
        islogged: action.islogged,
      };
    default:
      return state;
  }
};

export default AuthReducer;
