import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon, Row, Col } from 'antd';
import '.././App.css';

function HeaderMenu() {
  return (
      <Row>
        <Col span={16}>
              <p id="Header-logo">JorgePC</p>
        </Col>
        <Col span={8}>
            <Menu  mode="horizontal" className="Header-menu">
              <Menu.Item key="mail">
                  <Link to="/"><Icon type="home" /> Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/blog"><Icon type="read" /> Blog</Link>
              </Menu.Item>
            <Menu.Item key="alipay">
                <Link activeOnlyWhenExact={true} to="/contact"><Icon type="mail" /> Contato</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
  );
}

export default HeaderMenu;
