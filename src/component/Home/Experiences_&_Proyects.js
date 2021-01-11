import React, { useState } from 'react'
import { Col, Row } from 'antd';

const HomeExperiences = () => {
    const [state, setstate] = useState("")

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
                    {title: "Html"},
                    {title: "Css"},
                    {title: "React"},
                    {title: "Redux"},
                    {title: "Php"},
                    {title: "Myslql"},
                    {title: "Adobe XD"},
                    {title: "Otros..."},
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

    const ExperiencieContent = ({ item }) => {

        return (
            <Row className="Home-experiences-item">
                <Col className="Home-experiences-contentTitle" md={4}>
                    <h3>{item.tittle}</h3>
                </Col>
                <Col md={18} className="Home-experiences-content">
                    <Row type="flex">
                        <Col md={24} className="Experiences-content-date_info">
                            <p>{item.initial_date} - {item.end_date}</p>
                        </Col>
                        <Col md={12} className="Experiences-content-description">
                            <p>{item.description}</p>
                        </Col>
                    </Row>
                    {
                        section === "proyects" && (
                            <>
                                <Row>
                                    <Col md={2}>
                                        <p><b>Herramientas</b></p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={24}>
                                        {item.tools.map((tools, index) =>
                                            <li style={{ textAlign: "left" }}>{tools.title}</li>
                                        )}
                                    </Col>
                                </Row>
                            </>
                        )
                    }
                </Col>
            </Row>
        )
    }
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
                                        <small className="unselected" onClick={(e) => e.target.className !== "selected" && (ToggleSection(e, "experiences"))}>Experiences</small>
                                    </Col>
                                    <Col md={13}>
                                        <small>|</small>
                                    </Col>
                                    <Col md={18}>
                                        <small className="selected" onClick={(e) => e.target.className !== "selected" && (ToggleSection(e, "proyects"))}>Proyects</small>
                                    </Col>
                                </Row>
                            </Col>
                            <Col offset={2} md={20}>
                                {
                                    props[`${section}`].map((item, index) =>
                                        <ExperiencieContent item={item} />
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