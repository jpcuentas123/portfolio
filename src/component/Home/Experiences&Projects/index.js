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

    const experiencesClickHandler = (e, section) => {
        if (e.target.className !== "selected") {
            (ToggleSection(e, section))
        }
    }

    const experiencesOnPressHandler = (e, section) => {
        if (e.target.className !== "selected" && e.key === "Enter") {
            ToggleSection(e, section)
        }
    }



    return (
        <Row type="flex" align="top" justify="center" className="Home-experiences Home-row">
            <Col span={24} className="Home-experiences-header Home-content">
                <Row type="flex" align="top" justify="center">
                    <h2>Experiences and Proyects</h2>
                </Row>
            </Col>
            <Col md={12} className="Home-experiences-container">
                <Row type="flex" align="middle" justify="start">
                    <Col md={24}>
                        <Row type="flex" justify='center'>
                            <Col xs={24} sm={24} md={14} style={{ marginBottom: "8vh" }}>
                                <Row type="flex" style={{ width: "100%" }} align="middle" justify="center" gutter={10}>
                                    <Col md={10}>
                                        <small
                                            className="selected"
                                            tabIndex={0}
                                            onClick={(e) => experiencesClickHandler(e, "proyects")}
                                            onKeyPress={(e) => experiencesOnPressHandler(e, "proyects")}
                                        >
                                            Proyects
                                        </small>
                                    </Col>
                                    <Col md={1}>
                                        <small>|</small>
                                    </Col>
                                    <Col md={10} data-status="selected">
                                        <small className="unselected" tabIndex={0} onClick={(e) => experiencesClickHandler(e, "experiences")} onKeyPress={(e) => experiencesOnPressHandler(e, "experiences")}>Experiences</small>
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