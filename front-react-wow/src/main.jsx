import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter , RouterProvider, Route} from 'react-router-dom';
import Home from './router/Home';
import Classes from './router/Classes';
import Dashboard from './components/dashboard/Dashboard';
import Armory from './router/Armory';

const router = createBrowserRouter([


  {
    element: <App/>,
    children:[
     {
      path:"/",
      element:<Home/>
     },
     {
      path:"/classes/:classe",
      element:<Classes/>
     },
     {
      path:"/classes/:classe/:nome",
      element:<Armory/>
     },
    ],
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
