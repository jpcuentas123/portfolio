import React from 'react'
import { Row, Col, Skeleton } from 'antd';

class Blog extends React.Component {
    render() {
        return (
            <Row type="flex" align="top" justify="center" className="Home-blogPreview Home-row">
                <Col span={12} className="Home-blogPreview-header">
                    <Row type="flex" align="top" justify="start">
                        <Col md={24}>
                            <h2>Blog</h2>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row type="flex" justify="center" align="middle">
                        <Col md={18}>
                            <Row type="flex" justify="space-around" align="middle">
                                <Skeleton active avatar title />
                                <Col md={5}>
                                    {/* <img src={} alt="Imagen no disponible" /> */}
                                </Col>
                                <Col md={10}></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Blog;