import React, { Suspense } from 'react'
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { Layout } from 'antd'
import './dist/css/index.min.css'

import HeaderMenu from './component/Header'

import Footer from './component/Footer'

import store from './redux/store'
import Storage from './firebase'
import { logEvent } from 'firebase/analytics'

const Home = React.lazy(() => import('./component/Home'))
const Contact = React.lazy(() => import('./component/Contact/View'))

const { Header } = Layout

Storage.init()
const analytics = Storage.getFirebaseAnalytics()

logEvent(analytics, 'page_view')

const Root = () => {
  return (
    <Provider store={store}>
      <Layout className="LayoutBody background-transparent" id="layoutbody">
        <Header className="Header-content">
          <HeaderMenu />
        </Header>
        <Suspense
          fallback={
            <div
              style={{
                height: '100vh',
                background: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </Layout>
    </Provider>
  )
}

const router = createBrowserRouter([{ path: '*', Component: Root }])

export default function App() {
  return <RouterProvider router={router} />
}
