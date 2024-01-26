import ExperiencesHeaderWrapper from './styles'

const ExperiencesHeader = ({
  experiencesClickHandler,
  experiencesOnPressHandler,
  t,
}) => (
  <ExperiencesHeaderWrapper>
    <div data-status="selected">
      <small
        aria-label="Experiences"
        role="button"
        className="selected"
        tabIndex="0"
        onClick={e => experiencesClickHandler(e, 'experiences')}
        onKeyPress={e => experiencesOnPressHandler(e, 'experiences')}
      >
        {t('Experiences')}
      </small>
    </div>
    <div>
      <small>|</small>
    </div>
    <div>
      <small
        aria-label="Projects"
        role="button"
        tabIndex="0"
        className="unselected"
        onClick={e => experiencesClickHandler(e, 'projects')}
        onKeyPress={e => experiencesOnPressHandler(e, 'projects')}
      >
        {t('Projects')}
      </small>
    </div>
  </ExperiencesHeaderWrapper>
)

export default ExperiencesHeader
