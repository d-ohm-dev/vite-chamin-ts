import { createBrowserRouter } from "react-router-dom";
// import Frontpage from "./containers/Frontpage";
// import App from "./App";
import NotFound from "./containers/Error404";
import ProductView from "./containers/ProductView";
import ProductViewGallery from "./containers/ProductViewGallery";
// import LoggedNavbar from "./elements/CommonElements/LoggedNavBar";
// import LoginView from "./elements/Loginterface/LoginView";
import Basic from "./elements/Loginterface/LoginForm";
import RegisterForm from "./elements/Loginterface/RegisterForm";
// import { notesLayoutLoader } from "./elements/Loginterface/loginLoader";
import { populate } from "./models/db";
// import Frontpage from "./containers/Frontpage";
// import { Root } from "./Root";
import Landing from "./containers/LandingPage";

populate(); //cargamos la data en el LocalStorage / charging the data on LocalStorage

const router = createBrowserRouter([
  {
    index: true, element: <Landing/>
  },
  {
    path: '/register',
    element: <RegisterForm/>,
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