import { EMAIL } from '../actions';

const INITIAL_STATE = {
  email: null,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL:
      return {
        ...state,
        email: action.payload,
      }
      default:
        return state;
  }
};

export default LoginReducer;
