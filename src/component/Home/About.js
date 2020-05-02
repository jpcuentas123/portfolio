import React from 'react';
import {Col, Row} from 'antd'
// import { render } from 'react-dom';

class HomeAbout extends React.Component{
    render(){
        return (
            <Row type="flex" align="middle" justify="center" className="Home-about Home-row">
                <Col span={12} className="Home-about-content Home-content">
                    <Row type="flex" align="middle" justify="start">
                        <Col offset={2} md={12}><h2>ABOUT ME</h2></Col>
                        <Col offset={4} md={14}><p>Mi name is <b>Jorge Pérez Cuentas</b>. I'm Software Engineer focused in Web Development. In the areas of: Ux - UI Desing and FullStack Development.</p></Col>
                        <Col offset={5} md={16}>
                            <Row type="flex" justify="space-between" className="Home-about-content-skills">
                                <Col md={10}>
                                    <h4><b>Skills</b> - Frontend</h4>
                                    <ul>
                                        <li>JavaScript (EM6)</li>
                                        <li>React.js</li>
                                        <li>HTML & Css3</li>
                                        <li>Sass</li>
                                        <li>Desing Ui - Ux</li>
                                    </ul>
                                </Col>
                                <Col md={10}>
                                <h4><b>Skills</b> - Backend</h4>
                                    <ul>
                                        <li>PHP</li>
                                        <li>Laravel</li>
                                        <li>Node.js</li>
                                        <li>GrapQl</li>
                                        <li>MongoDb</li>
                                    </ul>
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
    }

}

export default HomeAbout;