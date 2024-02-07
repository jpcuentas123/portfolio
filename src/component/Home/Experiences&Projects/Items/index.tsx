import parse from 'html-react-parser'
import i18next from 'i18next'
import ExperienceItemsWrapper from './styles'
import { IExperience, IProject } from '../../../../data/ProjectAndExperiences'
import { FC } from 'react'
import Responsibilities from './responsibilities'
import { t } from 'i18next'
import { MdOpenInNew } from 'react-icons/md'
type Props = {
  item: IExperience | IProject
  section: string
}

const CompanyName = ({ name }: { name: string }) => (
  <>
    <h4>{name}</h4>
  </>
)

const ExperienceContent: FC<Props> = ({ item, section }) => {
  return (
    <ExperienceItemsWrapper className="Home-experiences-item">
      <div className="Home-experiences-contentTitle" translate="no">
        <h3>{item.title}</h3>
      </div>
      <div className="Home-experiences-content">
        <div>
          <div className="company-name">
            {item.link ? (
              <a href={item.link} title="" target="__blanck">
                <CompanyName name={item.company} /> <MdOpenInNew />
              </a>
            ) : (
              <CompanyName name={item.company} />
            )}
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
        {item.technologies.length > 0 && (
          <>
            <div>
              <div>
                <p>
                  <b>{t('Tools')}</b>
                </p>
              </div>
            </div>
            <div className="Experiences-content-tools">
              {item.technologies.map(({ title }) => (
                <span
                  className="Experiences-content-tools-technology"
                  style={{ textAlign: 'left' }}
                  key={title}
                >
                  {title}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </ExperienceItemsWrapper>
  )
}

export default ExperienceContent
