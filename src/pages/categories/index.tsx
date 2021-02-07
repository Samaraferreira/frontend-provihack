import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header'

import ImageUx from '../../assets/ux.png'
import ImageUi from '../../assets/ui.png'
import ImageDev from '../../assets/dev.png'
import ImageData from '../../assets/data.png'

import './styles.css'

const Categories: React.FC = () => {
  return (
    <>
      <Header />
      <div className="categories-container">
        <h1>Escolha sua área</h1>

        <div className="grid">
          <Link to="/challenges/ux">
            <div className="grid-image">
              <img src={ImageUx} alt="Experiência do usuário"/>
              <h2>UX</h2>
            </div>
          </Link>
          <Link to="/challenges/ui">
            <div className="grid-image">
              <img src={ImageUi} alt="Interface de usuário"/>
              <h2>UI</h2>
            </div>
          </Link>
          <Link to="/challenges/dev">
            <div className="grid-image">
              <img src={ImageDev} alt="Desenvolvedor"/>
              <h2>Desenvolvedor</h2>
            </div>
          </Link>
          <Link to="/challenges/data">
            <div className="grid-image">
              <img src={ImageData} alt="Ciência de dados"/>
              <h2>Ciência de Dados</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Categories
