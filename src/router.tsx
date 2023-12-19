import { createBrowserRouter } from "react-router-dom";
// import Frontpage from "./containers/Frontpage";
// import App from "./App";
import NotFound from "./containers/Error404";
import ProductView from "./containers/ProductView";
import ProductViewGallery from "./containers/ProductViewGallery";
// import LoggedNavbar from "./elements/CommonElements/LoggedNavBar";
// import LoginView from "./elements/Loginterface/LoginView";
import Basic from "./elements/Loginterface/LoginForm";
// import RegisterForm from "./elements/Loginterface/RegisterForm";
// import { notesLayoutLoader } from "./elements/Loginterface/loginLoader";
import { populate } from "./models/db";
// import Frontpage from "./containers/Frontpage";
import { Root } from "./Root";

populate(); //cargamos la data en el LocalStorage / charging the data on LocalStorage

const router = createBrowserRouter([
  {
    element: <Root/> ,
    path: '/'
    // children: [
    //   { index: true, 
    //     element: <Navigate to="/" /> },
    //   {
    //     path: '/',
    //     element:
    //   }

    // ],
    
  },
  {
    path: 'register',
    // element: <RegisterForm/>,
    // loader: notesLayoutLoader
  },
  {
    path: 'login',
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