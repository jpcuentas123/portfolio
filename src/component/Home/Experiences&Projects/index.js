import React, { useState } from 'react';
import { Col, Row } from 'antd';
import ExperienceContent from './Items';
import ProjectAndExperiences from '../../../data/ProjectAndExperiences.json';
import { t } from 'i18next';

const ExperiencesHeader = ({
    experiencesClickHandler,
    experiencesOnPressHandler,
}) => (
    <Row
        type="flex"
        style={{ width: '100%' }}
        align="middle"
        justify="center"
        gutter={10}
    >
        <Col md={10} data-status="selected">
            <small
                className="selected"
                tabIndex={0}
                onClick={(e) => experiencesClickHandler(e, 'experiences')}
                onKeyPress={(e) => experiencesOnPressHandler(e, 'experiences')}
            >
                {t('Experiences')}
            </small>
        </Col>
        <Col md={1}>
            <small>|</small>
        </Col>
        <Col md={10}>
            <small
                className="unselected"
                tabIndex={0}
                onClick={(e) => experiencesClickHandler(e, 'projects')}
                onKeyPress={(e) => experiencesOnPressHandler(e, 'projects')}
            >
                {t('Projects')}
            </small>
        </Col>
    </Row>
);

const HomeExperiences = () => {
    const [section, setSection] = useState('experiences');

    const ToggleSection = (e, newSection) => {
        document.querySelector('.selected').className = 'unselected';
        e.target.className = 'selected';
        setSection(newSection);
    };

    const experiencesClickHandler = (e, section) => {
        if (e.target.className !== 'selected') {
            ToggleSection(e, section);
        }
    };

    const experiencesOnPressHandler = (e, section) => {
        if (e.target.className !== 'selected' && e.key === 'Enter') {
            ToggleSection(e, section);
        }
    };

    return (
        <Row
            type="flex"
            align="top"
            justify="center"
            className="Home-experiences Home-row"
        >
            <Col
                xs={20}
                sm={20}
                md={24}
                xl={24}
                xxl={24}
                className="Home-experiences-header Home-content"
            >
                <Row type="flex" align="top" justify="center">
                    <h2>{t('Experiences and Projects')}</h2>
                </Row>
            </Col>
            <Col
                xs={18}
                sm={18}
                md={12}
                xl={14}
                xxl={12}
                className="Home-experiences-container"
            >
                <Row type="flex" align="middle" justify="start">
                    <Col md={24}>
                        <Row type="flex" justify="center">
                            <Col
                                xs={24}
                                sm={24}
                                md={14}
                                style={{ marginBottom: '8vh' }}
                            >
                                <ExperiencesHeader
                                    experiencesClickHandler={
                                        experiencesClickHandler
                                    }
                                    experiencesOnPressHandler={
                                        experiencesOnPressHandler
                                    }
                                />
                            </Col>
                            <Col offset={2} md={18}>
                                {ProjectAndExperiences[`${section}`].map(
                                    (item, index) => (
                                        <ExperienceContent
                                            item={item}
                                            section={section}
                                            key={item.company}
                                        />
                                    )
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row
                    type="flex"
                    align="middle"
                    justify="center"
                    className="Home-divider-container"
                >
                    <Col span={8} className="Home-divider"></Col>
                </Row>
            </Col>
        </Row>
    );
};

export default HomeExperiences;
