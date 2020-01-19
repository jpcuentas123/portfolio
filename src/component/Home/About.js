import React from 'react';
import {Col, Row} from 'antd'
// import { render } from 'react-dom';

class HomeAbout extends React.Component{
    render(){
        return (
            <Row type="flex" align="middle" justify="center" className="Home-about">
                <Col span={12} className="Home-about-content">
                    <Row type="flex" align="middle" justify="start">
                        <Col offset={2} md={12}><h2>ABOUT ME</h2></Col>
                        <Col offset={4} md={14}><p>Mi nombre es <b>Jorge Pérez Cuentas</b>. Soy un Ingeniero de software especializado en el Desarrollo Web Freelance. En las areas de: Diseño Ux - UI y Desarrollo FullStack.</p></Col>
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