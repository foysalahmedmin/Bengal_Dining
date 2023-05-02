import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Components/Layouts/Main';
import Home from '../components/Pages/Home/Home';
import LogIn from '../components/Pages/LogIn/LogIn';
import Register from '../components/Pages/Register/Register';
import Chef from '../components/Pages/Chef/Chef';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`http://localhost:55555/`)
      },
      {
        path: "/chef/:id",
        element: <Chef />,
        loader : ({params}) => fetch(`http://localhost:55555/chef/${params.id}`)
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
]);

export default router;