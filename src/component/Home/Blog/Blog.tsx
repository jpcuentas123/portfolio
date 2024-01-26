import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
// @ts-ignore
import background from '../assets/img/BackgroundBlog.jpg';
// @ts-ignore
import Blogimg1 from '../assets/img/blog_1.png';
import './../dist/css/blog.min.css';

const Blog = () => {
  const blogsData = [
    {
      img: Blogimg1,
      title: 'Viaje al amazonas',
      date: '07/01/2020',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida ante magna, dignissim fermentum lectus lobortis cursus.Vestibulum et elit vel lectus interdum varius.Etiam maximus odio erat, eget molestie ex consequat vitae.Aliquam vehicula placerat erat at maximus.Morbi at aliquam ex, quis elementum nulla. Maecenas rutrum odio mauris, in tempus nibh hendrerit eu.Aenean in sodales mauris, vitae elementum eros. Curabitur convallis massa vel ipsum faucibus ultrices.Duis laoreet lectus felis, sit amet lobortis sem facilisis eu. Etiam egestas placerat urna eu laoreet.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Maecenas in tincidunt felis, sit amet dictum nulla.Etiam volutpat urna efficitur tincidunt pharetra.',
      link: '',
    },
    {
      img: Blogimg1,
      title: 'Viaje al amazonas',
      date: '07/01/2020',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida ante magna, dignissim fermentum lectus lobortis cursus.Vestibulum et elit vel lectus interdum varius.Etiam maximus odio erat, eget molestie ex consequat vitae.Aliquam vehicula placerat erat at maximus.Morbi at aliquam ex, quis elementum nulla. Maecenas rutrum odio mauris, in tempus nibh hendrerit eu.Aenean in sodales mauris, vitae elementum eros. Curabitur convallis massa vel ipsum faucibus ultrices.Duis laoreet lectus felis, sit amet lobortis sem facilisis eu. Etiam egestas placerat urna eu laoreet.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Maecenas in tincidunt felis, sit amet dictum nulla.Etiam volutpat urna efficitur tincidunt pharetra.',
      link: '',
    },
  ];
  useEffect(() => {
    // @ts-ignore
    document.querySelector('body').style.backgroundImage = `url(${background})`;
  }, []);

  return (
    <Row align="top" justify="center" className="Home-blogPreview Home-row">
      <Col span={12} className="Home-blogPreview-header">
        <Row align="top" justify="start">
          <Col md={24}>
            <h2>Blog</h2>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="center" align="middle">
          <Col md={18} className="Blog-container">
            {blogsData.map((item, index) => (
              <Row
                justify="space-around"
                align="middle"
                className="Blog-container--row"
              >
                <Col md={5}>
                  <img src={item.img} alt="Imagen no disponible" />
                </Col>

                <Col md={10}>
                  <Row>
                    <Col>
                      <h2>{item.title}</h2>
                    </Col>

                    <Col>
                      <small>{item.date}</small>
                    </Col>

                    <Col className="Blog-container-description">
                      <p>{item.description}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Blog;
