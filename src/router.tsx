import { createBrowserRouter } from "react-router-dom";
// import Frontpage from "./containers/Frontpage";
import App from "./App";
import NotFound from "./containers/Error404";
import ProductView from "./containers/ProductView";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/product-view',
    element: <ProductView/>
  },
  {
    path: '*',
    element: <NotFound/>
    
  }

])


export default router