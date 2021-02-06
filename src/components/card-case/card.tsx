import React from 'react'

import './styles.css'

const CardCase: React.FC = () => {
  return (
    <li className="card-case">
      <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/lex_migration_whatsnew/lex_migration_whatsnew_service/images/5558bdc6b5223692311896b4de80571c_console-lex-service.png" alt=""/>
      <div className="card-case__about">
        <div className="about__header">
          <h3 className="about__title">
            Case numero 1
          </h3>
          <span className="card-case__tech">
            UX/UI
          </span>
        </div>
        <p className="about__description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <a className="card-case__link" href="/">
          Acessar case
        </a>
      </div>
    </li>
  )
}

export default CardCase
