export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/CLEAR_USER';

export const login = (payload: any) => ({
  payload,
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
