import React, { Component } from 'react';
import { Layout } from 'antd';
import './dist/css/index.min.css';
import Home from './component/Home';
import background from './assets/img/Background.png'
import HeaderMenu from './component/header'

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
        <Content>
          <Home />
        </Content>
      </Layout>
    );
  }
}
export default App;
