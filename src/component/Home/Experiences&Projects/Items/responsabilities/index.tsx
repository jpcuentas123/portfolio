import React, { FC } from 'react'
import { IExperience } from '../../../../../data/ProjectAndExperiences'
import ResponsibilitiesWrapper from './styles'

type Props = {
  responsibilities: IExperience['responsibilities']
}

const Responsibilities: FC<Props> = ({ responsibilities }) => {
  return (
    <ResponsibilitiesWrapper>
      <div>
        <div>
          <p className="Responsibilities-title">Responsibilities</p>
        </div>
      </div>
      <div>
        <ul>
          {responsibilities.map(title => (
            <li style={{ textAlign: 'left' }} key={title}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    </ResponsibilitiesWrapper>
  )
}

export default Responsibilities
