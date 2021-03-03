import { LOGIN, LOGOUT } from './actions';

export const INITIAL_STATE = {
  credentials: null,
  isAuthenticated: false,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        credentials: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
