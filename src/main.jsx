import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import PaulWasher from './pages/PaulWasher'
import RcSproul from './pages/RcSproul'
import TimothyKeller from './pages/TimothyKeller'
import JohnMacarthur from './pages/JohnMacarthur'
import WithThePerrys from './pages/WithThePerrys'
import Categories from './pages/categories'
import Favourites from './pages/favourites'
import Error from './components/Error'
import WatchHistory from './pages/WatchHistory'
import './cssFiles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/paulWasher',
    element: <PaulWasher/>
  },
  {
    path:'/rcSproul',
    element: <RcSproul/>
  },
  {
    path:'/timothyKeller',
    element: <TimothyKeller/>
  },
  {
    path:'/johnMacarthur',
    element: <JohnMacarthur/>
  },
  {
    path:'/withThePerrys',
    element: <WithThePerrys/>
  },
  {
    path: '/categories',
    element: <Categories/>
  },
  {
    path: '/favourites',
    element: <Favourites/>,
    errorElement: <Error/>
  },
  {
    path:'/watchHistory',
    element:<WatchHistory/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

