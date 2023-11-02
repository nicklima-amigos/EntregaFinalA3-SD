import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../components/Root/Root';
import { Home } from '../pages/Home';
import { Clients } from '../pages/Clients';
import { Navbar } from '../components/Navbar/Navbar';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    errorElement: (
      <>
        <Navbar />
        <h1>404</h1>
      </>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'clientes',
        element: <Clients />,
      },
      {
        path: 'produtos',
        element: <h1>Produtos</h1>,
      },
      {
        path: 'vendas',
        element: <h1>Vendas</h1>,
      },
    ],
  },
]);
