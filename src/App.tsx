import NotFound from "./views/NotFound";
import Cart from "./views/Cart";
import Home from "./views/Home";
import Details from "./views/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OnSale from "./views/OnSale";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/onsale",
    element: <OnSale />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
