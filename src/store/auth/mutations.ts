import http from '../../utils/httpClient';

const authenticate = () => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      a: 10,
      b: 20,
    }),
  };
  return http('https://603e296648171b0017b2eace.mockapi.io/auth', options);
};

export default {
  authenticate,
};
