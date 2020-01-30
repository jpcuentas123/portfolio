import React from 'react'
import { Row, Col } from 'antd'

export default function Footer() {
    return (
        <Row className="Footer">
            <Col md={5} className="Footer-content">
                <p>Social Networks</p>
                <ul>
                    <li>Linkeding</li>
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </Col>
        </Row>
    )
}
