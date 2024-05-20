//import react
import * as React from "react";
import * as ReactDOM from "react-dom/client";

//import fonts & general styles
import './assets/index.css';

//import react router
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//import components
import { NavBar } from './pages/navbar/NavBar.jsx';
  
  import { Home } from './pages/home/Home.jsx';
  import { Help } from './pages/help/Help.jsx';
  import { Collections } from './pages/collections/Collections.jsx';
  import { ProductList } from "./pages/ProductsList/ProductList.jsx";

import { PreFooter } from "./pages/Footer/PreFooter/PreFooter.jsx";
import { Footer } from "./pages/Footer/Footer.jsx";

  //import error page
  import ErrorPage from './pages/error-page/ErrorPage.jsx';

const ComponentsWrapperPreFooter = () =>{
  return(
    <div>
      <NavBar/>
      <Outlet/>
      <PreFooter/>
      <Footer/>
    </div>
  );
}
 
const ComponentsWrapper = () =>{
  return(
    <div>
      <NavBar/>
      <Help/>
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComponentsWrapperPreFooter/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/collections",
        element: <Collections/>
      },
      {
        path: "/products",
        element: <ProductList/>
      }
    ]
  },
  {
    path: "/",
    element: <ComponentsWrapper/>,
    children:[
      {
        path: "/help",
        element: <Help/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);