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
                        <Col offset={4} md={14}><p>Mi nombre es <b>Jorge Pérez Cuentas</b>. Soy un Ingeniero de software especializado en el Desarrollo Web. En las aéreas de: Diseño Ux - UI y Desarrollo FullStack.</p></Col>
                        <Col offset={5} md={16}>
                            <Row type="flex" justify="space-between">
                                <Col md={10}>
                                    <h4>Skills-Front</h4>
                                    <ul>
                                        <li>Java Script (EM6)</li>
                                        <li>React.js</li>
                                        <li>HTML & Css3</li>
                                        <li>Sass</li>
                                    </ul>
                                </Col>
                                <Col md={10}>
                                <h4>Skills-Front</h4>
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