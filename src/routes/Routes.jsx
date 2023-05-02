import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../Components/Layouts/Main';
import Home from '../components/Pages/Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        }
      ]
    },
  ]);

export default router;