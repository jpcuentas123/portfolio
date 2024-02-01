import parse from 'html-react-parser'
import i18next from 'i18next'
import ExperienceItemsWrapper from './styles'
import { IExperience, IProject } from '../../../../data/ProjectAndExperiences'
import { FC } from 'react'
import Responsibilities from './responsibilities'
import { t } from 'i18next'

type Props = {
  item: IExperience | IProject
  section: string
}

const ExperienceContent: FC<Props> = ({ item, section }) => {
  return (
    <ExperienceItemsWrapper className="Home-experiences-item">
      <div className="Home-experiences-contentTitle" translate="no">
        <h3>{item.title}</h3>
      </div>
      <div className="Home-experiences-content">
        <div>
          <div>
            <h4>{item.company}</h4>
          </div>
          <div className="Experiences-content-date_info">
            <p>
              {item.initial_date} - {item.end_date}
            </p>
          </div>
          <div className="Experiences-content-description">
            <p>{parse(item.description[i18next.language.split('-')[0]])}</p>
          </div>
        </div>
        <Responsibilities responsibilities={item.responsibilities} />
        {section === 'projects' && (
          <>
            <div>
              <div>
                <p>
                  <b>{t('Tools')}</b>
                </p>
              </div>
            </div>
            <div>
              <div>
                {item.technologies.map(({ title }) => (
                  <li style={{ textAlign: 'left' }} key={title}>
                    {title}
                  </li>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </ExperienceItemsWrapper>
  )
}

export default ExperienceContent
