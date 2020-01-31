import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { Layout } from 'antd';
import './dist/css/index.min.css';
import Home from './component/Home';
import HeaderMenu from './component/header'
import Blog from './component/Blog';
import Footer from './component/Footer';
import Contact from './component/Contact';
import store from './redux/store';

const { Header, Content } = Layout;


class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <Provider store={store}>
        <Layout className="LayoutBody background-transparent" id="layoutbody">
          <Header className="Header-content">
            <HeaderMenu />
          </Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Layout>
      </Provider>
    );
  }
}
export default App;
