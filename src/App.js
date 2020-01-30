import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import './dist/css/index.min.css';
import Home from './component/Home';
import background from './assets/img/Background.png'
import HeaderMenu from './component/header'
import Blog from './component/Blog';
import Footer from './component/Footer';
import Contact from './component/Contact';

const { Header, Content } = Layout;


class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    document.querySelector("body").style.backgroundImage = `url(${background})`;
  };
  render() {
    return (
      <Layout className="LayoutBody background-transparent" id="layoutbody">
        <Header className="Header-content">
          <HeaderMenu />
        </Header>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </Layout>
    );
  }
}
export default App;
