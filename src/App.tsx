import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import './dist/css/index.min.css';

import HeaderMenu from './component/Header';

import Footer from './component/Footer';

import store from './redux/store';
import Storage from './firebase';
import { logEvent } from 'firebase/analytics';

const Home = React.lazy(() => import('./component/Home'));
const Blog = React.lazy(() => import('./component/Blog'));
const Contact = React.lazy(() => import('./component/Contact/View'));

const { Header } = Layout;

Storage.init();
const analytics = Storage.getFirebaseAnalytics();

logEvent(analytics, 'page_view');

const App = () => {
    return (
        <Provider store={store}>
            <Layout
                className="LayoutBody background-transparent"
                id="layoutbody"
            >
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
                    <Switch>
                        <Route exact path="/" component={Home}>
                            <Home />
                        </Route>
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </Suspense>
                <Footer />
            </Layout>
        </Provider>
    );
};

const showTheLocationWithRouter = withRouter(App);
export default showTheLocationWithRouter;
