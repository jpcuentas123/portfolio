import React, { useState } from 'react'
import { Col, Row } from 'antd';

const HomeExperiences = () => {
    const [state, setstate] = useState("")
    return (
        <Row type="flex" align="top" justify="center" className="Home-experiences Home-row">
            <Col span={12} className="Home-experiences-header Home-content">
                <Row type="flex" align="top" justify="start">
                    <Col md={24}>
                        <h2>Experiences and Proyects</h2>
                    </Col>
                </Row>
            </Col>
            <Col md={22} className="Home-experiences-container">
                <Row type="flex" align="middle" justify="start">
                    <Col md={24}>
                        <Row type="flex">
                            <Col md={2}>
                                <Row type="flex" align="middle" justify="center">
                                    <Col md={18} data-status="selected">
                                        <small className="selected">Experiences</small>
                                    </Col>
                                    <Col md={13}>
                                        <small>|</small>
                                    </Col>
                                    <Col md={18}>
                                        <small className="unselected">Proyects</small>
                                    </Col>
                                </Row>
                            </Col>
                            <Col offset={2} className="Home-experiences-contentTitle" md={4}>
                                <h3>Freelance</h3>
                            </Col>
                            <Col md={14} className="Home-experiences-content">
                                <Row type="flex">
                                    <Col md={24} className="Experiences-content-date_info">
                                        <p>- 2018 - 2020</p>
                                    </Col>
                                    <Col md={12} className="Experiences-content-description">
                                        <p>He estado como Freelance en la
                                        plataforma Workana. Participando
                                        en numerosos proyectos. Teniendo
                                        unos de los perfiles más destacados
                                        de la plataforma.
                                            </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row type="flex" align="middle" justify="center" className="Home-divider-container">
                    <Col span={8} className="Home-divider"></Col>
                </Row>
            </Col>
        </Row>
    )
};

export default HomeExperiences;