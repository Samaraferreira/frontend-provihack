import React from 'react'
import { ChallengeType } from '../../services/ChallengeType'

import './styles.css'

type Props = {
  challenge: ChallengeType
}

const CardCase: React.FC<Props> = ({ challenge }: Props) => {
  return (
    <li className="card-case">
      <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/lex_migration_whatsnew/lex_migration_whatsnew_service/images/5558bdc6b5223692311896b4de80571c_console-lex-service.png" alt=""/>
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
        <a className="card-case__link" href="/">
          Acessar case
        </a>
      </div>
    </li>
  )
}

export default CardCase
