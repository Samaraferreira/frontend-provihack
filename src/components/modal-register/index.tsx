import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

import './styles.css'
import api from '../../services/api'

type Props = {
  close: Dispatch<SetStateAction<boolean>>
}

const ModalRegister: React.FC<Props> = ({ close }: Props) => {
  const [fields, setFields] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    async function load () {
      const response = await api.get('fields')
      setFields(response.data.data)
    }
    load()
  }, [])

  async function handleSubmit (event: React.FormEvent) {
    event.preventDefault()

    const data = {
      thumbnail: '',
      email,
      password,
      name,
      role,
      about: '',
      technologies: ['', ''],
      linkedin: '',
      github: '',
      behance: '',
      apps: ['photoshop', 'figma']
    }

    await api.post('/user', data).catch((err) => console.log(err))

    close(false)
  }

  return (
    <div className="container-modal">
      <div className="content">
        <h1 className="modal-title">
          Mão na Massa
        </h1>
        <button className="transparent" onClick={() => close(false)}>
          <CloseRoundedIcon color="primary" />
        </button>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Criar conta</h1>
          <p>Crie sua conta para ter acesso a todos os desafios e colocar a mão na massa!</p>
          <div className="input-block">
            <label htmlFor="">Nome</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input-block">
            <label htmlFor="">Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-block">
            <label htmlFor="">Área para qual está migrando</label>
            <select onChange={(e) => setRole(e.target.value)}>
              <option value="">Áreas de atuação</option>
              {fields.map(field => (
                <option key={field} value={field}>{field}</option>
              ))}
            </select>
          </div>
          <div className="input-block">
            <label htmlFor="">Senha</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" className="submit">CRIAR CONTA</Button>
          <Link to="/">Fazer <b>Login</b></Link>
        </form>
      </div>
    </div>
  )
}

export default ModalRegister
