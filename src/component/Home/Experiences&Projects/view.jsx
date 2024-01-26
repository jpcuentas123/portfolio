import ExperienceContent from './Items'
import ExperiencesHeader from './header'
import ExperiencesWrapper from './styles'
import ProjectAndExperiences from '../../../data/ProjectAndExperiences.json'

const ExperiencesView = ({
  experiencesClickHandler,
  experiencesOnPressHandler,
  section,
  sectionId,
  t,
}) => (
  <ExperiencesWrapper className="Home-experiences Home-row" id={sectionId}>
    <article className="Home-content Experiences-section">
      <header className="Home-experiences-header">
        <div>
          <h2>{t('Experiences and Projects')}</h2>
        </div>
      </header>
      <section className="Experiences-content">
        <ExperiencesHeader
          t={t}
          experiencesClickHandler={experiencesClickHandler}
          experiencesOnPressHandler={experiencesOnPressHandler}
        />
        <section>
          {ProjectAndExperiences[`${section}`].map((item, index) => (
            <ExperienceContent
              item={item}
              section={section}
              key={item.company}
            />
          ))}
        </section>
      </section>
    </article>

    <div className="Home-divider"></div>
  </ExperiencesWrapper>
)

export default ExperiencesView
