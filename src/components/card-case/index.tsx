import React from 'react'
import { Link } from 'react-router-dom'
import ChallengeType from '../../services/challengeType'

import './styles.css'

type Props = {
  challenge: ChallengeType
}

const CardCase: React.FC<Props> = ({ challenge }: Props) => {
  return (
    <li className="card-case">
      {challenge.thumbnail && <img src={challenge.thumbnail} alt=""/>}
      <div className="card-case__about">
        <div className="about__header">
          <h3 className="about__title">
            {challenge.title}
          </h3>
          <span className="card-case__tech">
            {challenge.category}
          </span>
        </div>
        <p className="about__description">
          {challenge.description}
        </p>
        <Link className="card-case__link" to={`/challenge/${challenge.id}`}>
          Acessar case
        </Link>
      </div>
    </li>
  )
}

export default CardCase
