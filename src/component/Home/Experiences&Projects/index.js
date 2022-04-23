import React, { useState } from 'react'
import { Col, Row } from 'antd';
import ExperiencieContent from './Items';

const HomeExperiences = () => {

    const [section, setSection] = useState("proyects")

    const props = {
        experiences: [
            {
                tittle: "Freelance",
                initial_date: "2018",
                end_date: "2020",
                description: "He estado como Freelance en la plataforma Workana. Participando en numerosos proyectos. Teniendo unos de los perfiles más destacados de la plataforma."
            }
        ],
        proyects: [
            {
                tittle: "Santas Carnitas",
                initial_date: "2020",
                end_date: "2021",
                description: "Santas Carnitas | Plataforma para venta de carnes online.",
                tools: [
                    { title: "Html" },
                    { title: "Css" },
                    { title: "React" },
                    { title: "Redux" },
                    { title: "Php" },
                    { title: "Myslql" },
                    { title: "Adobe XD" },
                    { title: "Otros..." },
                ]
            },
            {
                tittle: "Santas Carnitas",
                initial_date: "2020",
                end_date: "2021",
                description: "Santas Carnitas venta de carnes online.",
                tools: [{
                    title: "HTML"
                }]
            }
        ]
    }

    const ToggleSection = (e, newSection) => {
        document.querySelector(".selected").className = "unselected"
        e.target.className = "selected"
        setSection(newSection)
    }



    return (
        <Row type="flex" align="top" justify="center" className="Home-experiences Home-row">
            <Col span={24} className="Home-experiences-header Home-content">
                <Row type="flex" align="top" justify="start">
                    <Col md={24}>
                        <h2>Experiences and Proyects</h2>
                    </Col>
                </Row>
            </Col>
            <Col md={12} className="Home-experiences-container">
                <Row type="flex" align="middle" justify="start">
                    <Col md={24}>
                        <Row type="flex" justify='center'>
                            <Col md={14}>
                                <Row type="flex" style={{ marginBottom: "8vh" }} align="middle" justify="center">
                                    <Col md={10}>
                                        <small className="selected" onClick={(e) => e.target.className !== "selected" && (ToggleSection(e, "proyects"))}>Proyects</small>
                                    </Col>
                                    <Col md={1}>
                                        <small>|</small>
                                    </Col>
                                    <Col md={10} data-status="selected">
                                        <small className="unselected" onClick={(e) => e.target.className !== "selected" && (ToggleSection(e, "experiences"))}>Experiences</small>
                                    </Col>
                                </Row>
                            </Col>
                            <Col offset={2} md={18}>
                                {
                                    props[`${section}`].map((item, index) =>
                                        <ExperiencieContent item={item} section={section} />
                                    )
                                }
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