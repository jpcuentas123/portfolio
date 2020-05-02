import React from 'react'
import { Row, Col, Skeleton } from 'antd';
import styled from 'styled-components';

class blogPreview extends React.Component {
    render() {
        const ComingSoonTitle = styled.h1`
            font-size: 48px;
            margin: auto;
            color: #707070;
        `
        return (
            <Row type="flex" align="top" justify="center" className="Home-blogPreview Home-row">
                <Col span={12} className="Home-blogPreview-header">
                    <Row type="flex" align="top" justify="start">
                        <Col md={24}>
                            <h2>Blog</h2>
                        </Col>
                    </Row>
                </Col>

                <Col span={24} style={{textAlign:"center"}}>
                    <ComingSoonTitle>Coming Soon</ComingSoonTitle>
                    {/* <Row type="flex" justify="center" align="middle">
                        <Col md={18}>
                            <Row type="flex" justify="space-around" align="middle">
                                <Skeleton active avatar title />
                                <Col md={5}>
                                </Col>
                                <Col md={10}></Col>
                            </Row>
                        </Col>
                    </Row> */}
                </Col>
            </Row>
        )
    }
}

export default blogPreview;