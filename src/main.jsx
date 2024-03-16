import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './views/Login'
import { Gestor } from './views/Gestor'
import { Users } from './views/Users'
import { Afiliados } from './views/Afiliados'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/afiliados", element: <Afiliados /> },
      { path: "/gestores", element: <Gestor /> },
      { path: "/users", element: <Users /> },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
