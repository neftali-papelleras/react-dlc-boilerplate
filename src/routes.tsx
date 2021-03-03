// LAYOUT
import PublicLayout from './layouts/public';
import PrivateLayout from './layouts/private';

// PAGES
import SignIn from './pages/SignIn';

const routes = [
  {
    path: '/app',
    element: <PrivateLayout />,
  },
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: '/login',
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
