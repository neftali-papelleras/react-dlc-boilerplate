import { useEffect } from 'react';

import useAuth from '../../store/auth/hooks/useAuth';

export default () => {
  const [auth, isLoading, login] = useAuth();

  useEffect(() => {
    login();
  }, []);

  if (auth) {
    // Redirect...
  }

  return <div>{isLoading ? 'Loading...' : 'Done'}</div>;
};
