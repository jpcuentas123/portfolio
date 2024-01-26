import React from 'react'
import { useTranslation } from 'react-i18next'
import { AboutWrapper } from './styles'

const HomeAbout = ({ sectionId }) => {
  const { t } = useTranslation()
  return (
    <AboutWrapper className="Home-about Home-row" id={sectionId}>
      <article className="Home-about-content Home-content">
        <div>
          <div>
            <h2>{t('ABOUT ME')}</h2>
          </div>
          <div>
            <p className="Home-about-content-description">
              {t('My name is')} <b lang="es-CO">Jorge Pérez Cuentas</b>.{' '}
              {t(
                "I'm Software Engineer focused in Web Development. In the areas of: Ux - UI Design and FullStack Development."
              )}
            </p>
          </div>
          <div className="Home-about-content-skills" translate="no">
            <div>
              <p>
                <b>Skills</b> - Frontend
              </p>
              <ul>
                <li>JavaScript (EM6)</li>
                <li>
                  <span>React.js</span>
                </li>
                <li>HTML & Css3</li>
                <li>Sass</li>
                <li>Design Ui - Ux</li>
              </ul>
            </div>
            <div>
              <p>
                <b>Skills</b> - Backend
              </p>
              <ul>
                <li>PHP</li>
                <li>Node.js</li>
                <li>AWS</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <div className="Home-divider"></div>
    </AboutWrapper>
  )
}

export default HomeAbout
