import parse from 'html-react-parser'
import i18next from 'i18next'
import ExperienceContentWrapper from './styles'

const ExperienceContent = ({ item, section }) => {
  return (
    <ExperienceContentWrapper className="Home-experiences-item">
      <div className="Home-experiences-contentTitle" translate="no">
        <h3>{item.title}</h3>
      </div>
      <div className="Home-experiences-content">
        <div>
          <div className="Experiences-content-date_info">
            <p>
              {item.initial_date} - {item.end_date}
            </p>
          </div>
          <div className="Experiences-content-description">
            <p>{parse(item.description[i18next.language.split('-')[0]])}</p>
          </div>
        </div>
        {section === 'projects' && (
          <>
            <div>
              <div>
                <p>
                  <b>Herramientas</b>
                </p>
              </div>
            </div>
            <div>
              <div>
                {item.tools.map((tools, index) => (
                  <li style={{ textAlign: 'left' }}>{tools.title}</li>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </ExperienceContentWrapper>
  )
}

export default ExperienceContent
