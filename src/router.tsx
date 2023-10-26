import {createBrowserRouter } from "react-router-dom";
// import Frontpage from "./containers/Frontpage";
import App from "./App";
import NotFound from "./containers/Error404";
import ProductView from "./containers/ProductView";
import ProductViewGallery from "./containers/ProductViewGallery";
// import LoggedNavbar from "./elements/CommonElements/LoggedNavBar";
// import LoginView from "./elements/Loginterface/LoginView";
import Basic from "./elements/Loginterface/LoginForm";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    
    path: '/login',
    element:  <Basic/>,
  },
  {
    path: 'product-view',
    element: <ProductViewGallery/>,
  },
  {
    path: 'product-view/detail',
    element: <ProductView/>
  },
  {
    path: '*',
    element: <NotFound/>
    
  }


])


export default router