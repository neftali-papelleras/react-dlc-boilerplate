import authReducer from './auth/reducers';

export default ({ auth } : any, action: any) => ({
  auth: authReducer(auth, action),
});
