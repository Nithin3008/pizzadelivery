import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  { path: "/menu", element: <Menu></Menu> },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/order/new",
    element: <CreateOrder></CreateOrder>,
  },
  {
    path: "./order/:orderId",
    element: <Order></Order>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
