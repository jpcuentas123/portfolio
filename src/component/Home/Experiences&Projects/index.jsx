import React, { useState } from 'react'
import { t } from 'i18next'
import ExperiencesView from './view'

const HomeExperiences = ({ sectionId }) => {
  const [section, setSection] = useState('experiences')

  const ToggleSection = (e, newSection) => {
    document.querySelector('.selected').className = 'unselected'
    e.target.className = 'selected'
    setSection(newSection)
  }

  const experiencesClickHandler = (e, section) => {
    if (e.target.className !== 'selected') {
      ToggleSection(e, section)
    }
  }

  const experiencesOnPressHandler = (e, section) => {
    if (e.target.className !== 'selected' && e.key === 'Enter') {
      ToggleSection(e, section)
    }
  }

  return (
    <ExperiencesView
      experiencesClickHandler={experiencesClickHandler}
      experiencesOnPressHandler={experiencesOnPressHandler}
      section={section}
      sectionId={sectionId}
      t={t}
    />
  )
}

export default HomeExperiences
