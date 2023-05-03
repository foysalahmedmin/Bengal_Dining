import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Components/Layouts/Main';
import Home from '../components/Pages/Home/Home';
import LogIn from '../components/Pages/LogIn/LogIn';
import Register from '../components/Pages/Register/Register';
import Chef from '../components/Pages/Chef/Chef';
import Blog from '../components/Pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/chef/:id",
        element: <Chef />,
        loader : ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
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