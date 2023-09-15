import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Family from './pages/Family'
import SpiritualGifts from './pages/SpiritualGifts'
import Marriage from './pages/Marriage'
import Service from './pages/Service'
import Friendships from './pages/Friendships'
import Categories from './pages/categories'
import Favourites from './pages/favourites'
import './cssFiles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/family',
    element: <Family/>
  },
  {
    path:'/spiritualgifts',
    element: <SpiritualGifts/>
  },
  {
    path:'/marriage',
    element: <Marriage/>
  },
  {
    path:'/service',
    element: <Service/>
  },
  {
    path:'/friendships',
    element: <Friendships/>
  },
  {
    path: '/categories',
    element: <Categories/>
  },
  {
    path: '/favourites',
    element: <Favourites/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

