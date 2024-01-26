import React, { Suspense } from 'react'
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom'
import './dist/css/index.min.css'

import Footer from './component/Footer'

import Home from './component/Home'
import HeaderMenu from './component/Home/Header'

const Contact = React.lazy(() => import('./component/Contact/View'))

const Root = () => {
  return (
    <main>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  )
}

const router = createBrowserRouter([{ path: '*', Component: Root }])

export default function App() {
  return <RouterProvider router={router} />
}
