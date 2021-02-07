import React, { useState, Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

import './styles.css'

type Props = {
  close: Dispatch<SetStateAction<boolean>>
}

const ModalRegister: React.FC<Props> = ({ close }: Props) => {
  const [selectedField, setSelectedField] = useState('ui')
  console.log(selectedField)
  return (
    <div className="container-modal">
      <div className="content">
        <h1 className="modal-title">
          Mão na Massa
        </h1>
        <button className="transparent" onClick={() => close(false)}>
          <CloseRoundedIcon color="primary" />
        </button>
        <form className="form">
          <h1>Criar conta</h1>
          <p>Crie sua conta para ter acesso a todos os desafios e colocar a mão na massa!</p>
          <div className="input-block">
            <label htmlFor="">Nome</label>
            <input type="text"/>
          </div>
          <div className="input-block">
            <label htmlFor="">Email</label>
            <input type="text"/>
          </div>
          <div className="input-block">
            <label htmlFor="">Área para qual está migrando</label>
            <select onChange={(e) => setSelectedField(e.target.value)}>
              <option value="">Áreas de atuação</option>
              <option value="ui">Ui</option>
              <option value="frontend">Frontend</option>
            </select>
          </div>
          <div className="input-block">
            <label htmlFor="">Senha</label>
            <input type="text"/>
          </div>
          <Button className="submit">CRIAR CONTA</Button>
          <Link to="/">Fazer <b>Login</b></Link>
        </form>
      </div>
    </div>
  )
}

export default ModalRegister
