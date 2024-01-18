import { createBrowserRouter } from "react-router-dom";
// import Frontpage from "./containers/Frontpage";
// import App from "./App";
import NotFound from "./containers/Error404";
import ProductView from "./containers/ProductView";
import ProductViewGallery from "./containers/ProductViewGallery";
// import LoggedNavbar from "./elements/CommonElements/LoggedNavBar";
import Basic from "./elements/Loginterface/LoginForm";
// import { notesLayoutLoader } from "./elements/Loginterface/loginLoader";
import { populate } from "./models/db";
import { Root } from "./Root";
import { registerFormAction } from "./elements/Loginterface/registerAction";
import Register from "./elements/Loginterface/RegisterForm";
import { userDetailsLoader } from "./elements/Loginterface/loginLoader";
import UserDetail from "./elements/Loginterface/UserDetails";
import { userAction } from "./elements/Loginterface/userAction";

populate(); //cargamos la data en el LocalStorage / charging the data on LocalStorage

const router = createBrowserRouter([
  {
    path: '/', element: <Root/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/product-view',
    element: <ProductViewGallery/>,
  },
  {
    path: 'product-view/detail',
    element: <ProductView/>
  },
  {
    path: '/register',
    element: <Register/>,
    action: registerFormAction,
  },
  {
    path: '/register/:userId',
    element: <UserDetail/>,
    loader: userDetailsLoader,
    action: userAction
    

  },
  {
    path: 'login',
    element:  <Basic/>,

  },
  {
    path: '*',
    element: <NotFound/>
    
  }
])

export default router