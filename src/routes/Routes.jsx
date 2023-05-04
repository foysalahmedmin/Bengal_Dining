import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Components/Layouts/Main';
import Home from '../components/Pages/Home/Home';
import LogIn from '../components/Pages/LogIn/LogIn';
import Register from '../components/Pages/Register/Register';
import Chef from '../components/Pages/Chef/Chef';
import Blog from '../components/Pages/Blog/Blog';
import PrivateRout from './PrivateRout';
import ErrorPage from '../components/Pages/shared/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/chef/:id",
        element: <PrivateRout><Chef /></PrivateRout> ,
        loader : ({params}) => fetch(`https://bengal-dining-server.vercel.app/chef/${params.id}`)
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ]
  },
]);

export default router;