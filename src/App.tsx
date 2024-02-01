import React from 'react'
import './dist/css/index.min.css'

import Footer from './component/Footer'

import Home from './component/Home'
import HeaderMenu from './component/Home/Header'

// const Contact = React.lazy(() => import('./component/Contact/View'))

const App = () => {
  return (
    <main>
      <HeaderMenu />
      <Home />
      <Footer />
    </main>
  )
}

// const router = createBrowserRouter([{ path: '*', Component: Root }])}
// export default function App() {
//   return <RouterProvider router={router} />
// }

export default App
