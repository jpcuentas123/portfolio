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
                "Experienced Senior Software Engineer with 5 years of expertise. Proficient in React.js, I've successfully led end-to-end creation of diverse projects, including e-commerce platforms, machine maintenance software, and SaaS."
              )}
            </p>
          </div>
          <div className="Home-about-content-skills" translate="no">
            <div>
              <p>
                <b>Skills</b> - Frontend
              </p>
              <ul>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Typescript</li>
                <li>HTML & Css3</li>
                <li>Sass</li>
              </ul>
            </div>
            <div>
              <p>
                <b>Skills</b> - Backend
              </p>
              <ul>
                <li>Node.js</li>
                <li>AWS</li>
                <li>Firebase</li>
                <li>PostgreSql</li>
                <li>PHP</li>
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
