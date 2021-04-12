import React, { Component, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { Layout } from 'antd';
import './dist/css/index.min.css';

import HeaderMenu from './component/header'

import Footer from './component/Footer';

import store from './redux/store';

const Home = React.lazy(() => import('./component/Home'));
const Blog = React.lazy(() => import('./component/Blog'));
const Contact = React.lazy(() => import('./component/Contact'));

const { Header } = Layout;



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: this.props.location.pathname
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Layout className="LayoutBody background-transparent" id="layoutbody">
          <Header className="Header-content">
            <HeaderMenu menuLink={this.state.menu} />
          </Header>
          <Suspense fallback={<div style={{height: "100vh"}}>Loading...</div>} >
            <Switch>
              <Route exact path="/" component={Home} >
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
  }
}

const showTheLocationWithRouter = withRouter(App)
export default showTheLocationWithRouter;
