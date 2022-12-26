import { createBrowserRouter } from 'react-router-dom'

import Error from './../pages/Error'

import Root from './../pages/root'
import Home from './../pages/Home'
import Contact from './../pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

export default router
