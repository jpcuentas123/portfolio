import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Row, Col } from 'antd';
import '.././App.css';
import { Change_link } from '../redux/index'
import { useDispatch, useSelector } from 'react-redux';

function HeaderMenu({menuLink}) {

  const actualLink = useSelector(state => state.link)
  const dispatch = useDispatch();
  const [initialLink, changeInitialLink] = useState(menuLink)

  const Change_link_Dispatch = (link) => {
    dispatch(Change_link(link))
    changeInitialLink(link)
  }
  return (
    <Row>
      <Col span={16}>
        <p id="Header-logo">JorgePC</p>
      </Col>
      <Col span={8}>
        <Menu mode="horizontal" className="Header-menu" selectedKeys={[initialLink]}>
          <Menu.Item key="/">
            <Link onClick={() => Change_link_Dispatch("/")} to="/"><Icon type="home" /> Home</Link>
          </Menu.Item>
          <Menu.Item key="/blog">
            <Link onClick={() => Change_link_Dispatch("/blog")} to="/blog"><Icon type="read" /> Blog</Link>
          </Menu.Item>
          <Menu.Item key="/contact">
            <Link onClick={() => Change_link_Dispatch("/contact")} to="/contact"><Icon type="mail" /> Contato</Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}


export default HeaderMenu;
