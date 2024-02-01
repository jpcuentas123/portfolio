import React, { FC } from 'react'
import { IExperience } from '../../../../../data/ProjectAndExperiences'
import ResponsibilitiesWrapper from './styles'
import i18next, { t } from 'i18next'

type Props = {
  responsibilities: IExperience['responsibilities']
}

const Responsibilities: FC<Props> = ({ responsibilities }) => {
  return (
    <ResponsibilitiesWrapper>
      <div>
        <div>
          <p className="Responsibilities-title">{t('Responsibilities')}</p>
        </div>
      </div>
      <div>
        <ul>
          {responsibilities.map(title => (
            <li
              style={{ textAlign: 'left' }}
              key={title[i18next.language.split('-')[0]]}
            >
              {title[i18next.language.split('-')[0]]}
            </li>
          ))}
        </ul>
      </div>
    </ResponsibilitiesWrapper>
  )
}

export default Responsibilities
