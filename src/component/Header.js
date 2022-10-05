import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import { Change_link } from "../redux/index";
import { useDispatch } from "react-redux";
import { t } from "i18next";

function HeaderMenu() {

  const {
    pathname
  } = useLocation();
  const dispatch = useDispatch();
  const [initialLink, changeInitialLink] = useState(pathname);


  const redirectionHandler = (link) => {
    dispatch(Change_link(link));
    changeInitialLink(link);
  };

  return (
    <Row>
      <Col span={16}>
        <p id="Header-logo"><Link onClick={() => redirectionHandler("/")} to="/" style={{
          color: "#000000d9",
        }}>JorgePC</Link></p>
      </Col>
      <Col span={8}>
        <Menu
          mode="horizontal"
          className="Header-menu"
          selectedKeys={[initialLink]}
        >
          <Menu.Item key="/">
            <Link onClick={() => redirectionHandler("/")} to="/">
              {t("Home")}
            </Link>
          </Menu.Item>
          <Menu.Item key="/blog">
            <Link onClick={() => redirectionHandler("/blog")} to="/blog">
              Blog
            </Link>
          </Menu.Item>
          <Menu.Item key="/contact">
            <Link
              onClick={() => redirectionHandler("/contact")}
              to="/contact"
            >
              {t("Contact")}
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}

export default HeaderMenu;
