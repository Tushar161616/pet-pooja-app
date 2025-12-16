import React from "react";
import '../src/index.css'
import FoodCorner from "./pages/FoodCorner";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/AppLayout';
import DineOut from './pages/DineOut';
import Contact from './pages/Contact';
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element : <AppLayout />,
    children : [
      {
        path: "/",
        element : <Home />,
      },
      
      {
        path: "foodcorner",
        element : <FoodCorner />,
      },

      {
        path: "dineout",
        element : <DineOut/>,
      },

        {
        path: "contact",
        element : <Contact/>,
      },
    ] 
  },

  {
    path: "/cart",
    element : <Cart />,
  }

]);

const App = () => {

  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;