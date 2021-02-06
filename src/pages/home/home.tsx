import React from 'react'
import { Button, CardCase, Header } from '../../components'

import Image1 from '../../assets/image1.svg'
import Image2 from '../../assets/image2.svg'
import Image3 from '../../assets/image3.svg'
import MainImage from '../../assets/main.svg'
import './styles.css'

const Home: React.FC = () => {
  return (
    <>
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
              <button className="register-btn">CRIAR CONTA</button>
              <button className="cases-btn">VER DESAFIOS</button>
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
          <Button>CRIAR CONTA</Button>
        </section>
        <section className="cases">
          <h2 className="cases__title">Veja alguns cases</h2>
          <span className="cases__description">
            Esses são alguns dos cases que você terá acesso dentro da plataforma.
            Todos contam com um briefing estruturados por empresas e ongs reais.
          </span>
          <ul className="list-cards">
            <CardCase />
            <CardCase />
            <CardCase />
          </ul>
          <button className="load-all-btn">ACESSAR TODOS OS DESAFIOS</button>
        </section>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Home
