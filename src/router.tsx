import { createBrowserRouter } from "react-router-dom";
// import Frontpage from "./containers/Frontpage";
import App from "./App";
import NotFound from "./containers/Error404";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '*',
    element: <NotFound/>
    
  }

])


export default router