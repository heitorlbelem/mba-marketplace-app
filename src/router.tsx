import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages/app/dashboard'
import { Products } from './pages/app/products'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-out'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/products', element: <Products /> },
  { path: '/sign-in', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
])
