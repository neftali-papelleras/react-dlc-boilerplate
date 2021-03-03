import { useState } from 'react';
import { useStateValue } from '../../index';
import { login } from '../actions';
import Mutations from '../mutations';

const useAuth = () => {
  const [{ auth }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);

  const req = async () => {
    setIsLoading(true);

    const response = await Mutations.authenticate();

    setIsLoading(false);

    dispatch(login(response));
  };

  return [auth, isLoading, req];
};

export default useAuth;
