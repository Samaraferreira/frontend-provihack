import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import { ChallengeType } from '../../services/challengeType'
import Header from '../../components/header'

import Image from '../../assets/online.svg'

import './styles.css'

export interface RouteParams {
  id: string
}

const Challenges: React.FC = () => {
  const [challenge, setChallenge] = useState<ChallengeType>({} as ChallengeType)

  const { id } = useParams<RouteParams>()

  useEffect(() => {
    async function load () {
      const response = await api.get(`challenge/${id}`)
      response.data.data.map((c: ChallengeType) => setChallenge(c))
    }
    load()
  }, [id])

  return (
    <>
      <Header />
      <div className="wrapper">
        <main className="challenge-container">
          <h1 className="challenge-title">{challenge.title}</h1>
          <p className="challenge-description">{challenge.description}</p>
        </main>

        <img src={Image} alt="" className="section-content-img" />

        <section className="challenge-section">
          <div className="section-content">
            <strong>Seu desafio será</strong>
            <ul>
              <li>fazer pesquisa com usuários</li>
              <li>entender as principais dores</li>
              <li>mapear pontos  de contato</li>
              <li>fazer testes de usabilidade</li>
              <li>testar e validar soluções</li>
            </ul>
          </div>
        </section>

        <div className="group">
          <strong className="challenge-match">
            Bora desenvolver esse case conosco?
            Se deu match entre em contato para maiores informações =)
          </strong>
          <div className="contact">
            <span>contato.empresa@empresa.com.br</span>
            <span>(xx) 0011-3344</span>
          </div>
        </div>
      </div>
      <footer>
      </footer>
    </>
  )
}

export default Challenges
