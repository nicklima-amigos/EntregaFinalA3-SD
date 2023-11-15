import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Root } from "../components/Root/Root";
import { Clients } from "../pages/Clients/Clients";
import { CreateClient } from "../pages/Clients/CreateClient";
import { UpdateClient } from "../pages/Clients/UpdateClient";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products/Products";
import { UpdateProduct } from "../pages/Products/UpdateProduct";
import { CreateProduct } from "../pages/Products/CreateProduct";
import { Sales } from "../pages/Sales/Sales";
import { CreateSale } from "../pages/Sales/CreateSale";
import { UpdateSale } from "../pages/Sales/UpdateSale";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: (
      <>
        <Navbar />
        <h1>404</h1>
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "clientes",
        element: <Clients />,
      },
      {
        path: "clientes/cadastrar",
        element: <CreateClient />,
      },
      {
        path: "clientes/atualizar/:id",
        element: <UpdateClient />,
      },
      {
        path: "produtos",
        element: <Products />,
      },
      {
        path: "produtos/cadastrar",
        element: <CreateProduct />,
      },
      {
        path: "produtos/atualizar/:id",
        element: <UpdateProduct />,
      },
      {
        path: "vendas",
        element: <Sales />,
      },
      {
        path: "vendas/cadastrar",
        element: <CreateSale />,
      },
      {
        path: "vendas/atualizar/:id",
        element: <UpdateSale />,
      },
    ],
  },
]);
