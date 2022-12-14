import { Login } from '@/presentation/pages'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '@/presentation/styles/global.scss'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  }
])

const Router: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default Router
