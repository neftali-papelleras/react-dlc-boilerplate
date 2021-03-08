// LAYOUT
import PublicLayout from './layouts/Public';
import PrivateLayout from './layouts/Private';

// PAGES
import HomePage from './pages/HomePage';

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
        path: '/',
        element: <HomePage />,
      },
    ],
  },
];

export default routes;
