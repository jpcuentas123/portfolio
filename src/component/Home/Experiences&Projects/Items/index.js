import { Col, Row } from 'antd'
import parse from 'html-react-parser'
import i18next from 'i18next'
const ExperienceContent = ({ item, section }) => {
  return (
    <Row className="Home-experiences-item">
      <Col className="Home-experiences-contentTitle" md={6} translate="no">
        <h3>{item.title}</h3>
      </Col>
      <Col md={14} className="Home-experiences-content">
        <Row type="flex">
          <Col md={24} className="Experiences-content-date_info">
            <p>
              {item.initial_date} - {item.end_date}
            </p>
          </Col>
          <Col md={24} className="Experiences-content-description">
            <p>{parse(item.description[i18next.language.split('-')[0]])}</p>
          </Col>
        </Row>
        {section === 'projects' && (
          <>
            <Row>
              <Col md={2}>
                <p>
                  <b>Herramientas</b>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                {item.tools.map((tools, index) => (
                  <li style={{ textAlign: 'left' }}>{tools.title}</li>
                ))}
              </Col>
            </Row>
          </>
        )}
      </Col>
    </Row>
  )
}

export default ExperienceContent
