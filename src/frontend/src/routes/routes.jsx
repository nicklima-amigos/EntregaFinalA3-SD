import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../components/Root/Root';
import { Home } from '../pages/Home';
import { Clients } from '../pages/Clients';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'clients',
        element: <Clients />,
      },
    ],
  },
]);
