import React from 'react'
import { Row, Col } from 'antd';
import background from '../assets/img/BackgroundBlog.jpg'
import Blogimg1 from '../assets/img/blog_1.png'
import styled from 'styled-components';


class Blog extends React.Component {
    componentDidMount() {
        document.querySelector("body").style.backgroundImage = `url(${background})`;
    };
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
                <Col span={24}>
                    <Row type="flex" justify="center" align="middle">
                        <Col md={18} className="Blog-container">
                            <Row type="flex" justify="space-around" align="middle" className="Blog-container--row">
                                <Col md={5}>
                                    <img src={Blogimg1} alt="Imagen no disponible" />
                                </Col>
                                <Col md={10}>
                                    <Row>
                                        <Col><h2>Viaje al amazonas</h2></Col>
                                        <Col><small>07/01/2020</small></Col>
                                        <Col className="Blog-container-description">
                                            <p >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida ante magna, dignissim fermentum
                                                lectus lobortis cursus. Vestibulum et elit vel lectus interdum varius. Etiam maximus odio erat, eget molestie
                                                ex consequat vitae. Aliquam vehicula placerat erat at maximus. Morbi at aliquam ex, quis elementum nulla.
                                                Maecenas rutrum odio mauris, in tempus nibh hendrerit eu. Aenean in sodales mauris, vitae elementum eros.
                                                Curabitur convallis massa vel ipsum faucibus ultrices. Duis laoreet lectus felis, sit amet lobortis sem facilisis eu.
                                                Etiam egestas placerat urna eu laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                                turpis egestas. Maecenas in tincidunt felis, sit amet dictum nulla. Etiam volutpat urna efficitur tincidunt pharetra.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                {/* <ComingSoonTitle>Coming Soon</ComingSoonTitle> */}
            </Row>
        )
    }
}

export default Blog;