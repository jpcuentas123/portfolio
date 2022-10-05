import React from "react";
import { Col, Row } from "antd";
import { Trans, withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

const HomeAbout = () => {
  const { t } = useTranslation()
  return (
    <Row
      type="flex"
      align="middle"
      justify="center"
      className="Home-about Home-row"
    >
      <Col md={12} xs={18} className="Home-about-content Home-content">
        <Row type="flex" align="middle" justify="start">
          <Col offset={2} md={12}>
            <h2>{t("ABOUT ME")}</h2>
          </Col>
          <Col offset={4} md={14}>
            <p>
              {t('My name is')} {' '}
              <b>
                Jorge Pérez Cuentas
              </b>.
              {' '}
              {t("I'm Software Engineer focused in Web Development and soon in AI. In the areas of: Ux - UI Design and FullStack Development.")}
            </p>
          </Col>
          <Col offset={5} md={16}>
            <Row
              type="flex"
              justify="space-between"
              className="Home-about-content-skills"
            >
              <Col md={10}>
                <h4>
                  <b>Skills</b> - Frontend
                </h4>
                <ul>
                  <li>JavaScript (EM6)</li>
                  <li>React.js</li>
                  <li>HTML & Css3</li>
                  <li>Sass</li>
                  <li>Desing Ui - Ux</li>
                </ul>
              </Col>
              <Col md={10}>
                <h4>
                  <b>Skills</b> - Backend
                </h4>
                <ul>
                  <li>PHP</li>
                  <li>Node.js</li>
                  <li>GrapQl</li>
                  <li>AWS</li>
                  <li>Firebase</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row
          type="flex"
          align="middle"
          justify="center"
          className="Home-divider-container"
        >
          <Col span={8} className="Home-divider"></Col>
        </Row>
      </Col>
    </Row>
  );
}

export default withTranslation()(HomeAbout);
