import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ChallengeType from '../../services/challengeType'
import api from '../../services/api'
import CardCase from '../../components/card-case'
import Header from '../../components/header'
import Button from '../../components/button'

import Image1 from '../../assets/image1.svg'
import Image2 from '../../assets/image2.svg'
import Image3 from '../../assets/image3.svg'
import MainImage from '../../assets/main.svg'
import './styles.css'
import ModalRegister from '../../components/modal-register'

const Home: React.FC = () => {
  const [challenges, setChallenges] = useState<ChallengeType[]>([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    async function load () {
      const response = await api.get('challenges')
      setChallenges(response.data.data)
    }
    load()
  }, [])

  return (
    <>
      {openModal && <ModalRegister close={setOpenModal} />}
      <Header />
      <main className="home-container">
        <section className="top">
          <img src={MainImage} className="main-image" alt=""/>
          <div className="main">
            <h1 className="main-title">Coloque tudo que você aprendeu <b>na prática!</b></h1>
            <p className="main-text">
              Tenha acesso a desafios reais de programação e  UX/UI,
              para turbinar seu portifólio enquanto colabora com ongs e empresas.
              Assim sua transição de carreira fica ainda mais rápida.
            </p>
            <div className="top__buttons">
              <button className="register-btn" onClick={() => setOpenModal(true)}>CRIAR CONTA</button>
              <Link to="/challenges" className="cases-btn">
                VER DESAFIOS
              </Link>
            </div>
          </div>
        </section>
        <section className="about">
          <header className="about__header">
            <h1>Como funciona</h1>
            <p>
              Entenda como você pode turbinar ainda mais o seu portifólio com desafios de ogns e empresas.
            </p>
          </header>

          <div className="steps">
            <div className="step">
              <strong>Faça seu cadastro</strong>
              <img src={Image1} alt=""/>
              <p>
                No seu cadastro você já pode deixar claro quais habilidades e skills você quer desenvolver.
                Isso nos ajuda a entegar desafios cada vez mais relevantes para a comunida tech.
              </p>
            </div>
            <div className="step">
              <strong>Acesse os desafios</strong>
              <img src={Image2} alt=""/>
              <p>
                Quando você estiver cadastrado na plataforma terá acesso a todos os desafios disponibilizados pelo nosso parceiro.
                Você pode filtrar por área, skill e linguagem, faça no seu tempo.
              </p>
            </div>
            <div className="step">
              <strong>Tenha um portifólio incrivel</strong>
              <img src={Image3} alt=""/>
              <p>
                Utilize seus projetos para tornar seu portifólio mais trativo e chamar a atenção dos recrutadores,
                para finalmente ingressar no mercado de tech.
              </p>
            </div>
          </div>
          <Button onClick={() => setOpenModal(true)}>CRIAR CONTA</Button>
        </section>
        <section className="cases">
          <h2 className="cases__title">Veja alguns cases</h2>
          <span className="cases__description">
            Esses são alguns dos cases que você terá acesso dentro da plataforma.
            Todos contam com um briefing estruturados por empresas e ongs reais.
          </span>
          <ul className="list-cards">
            {challenges.map((challenge, index) => {
              if (index < 3) {
                return (
                  <CardCase key={challenge.id} challenge={challenge} />
                )
              }
              return null
            })}
          </ul>
          <Link to="/challenges" className="load-all-btn">
            ACESSAR TODOS OS DESAFIOS
          </Link>
        </section>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Home
