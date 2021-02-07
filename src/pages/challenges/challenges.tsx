import React, { useEffect, useState } from 'react'
import { Button, CardCase, Header } from '../../components'
import api from '../../services/api'
import { ChallengeType } from '../../services/ChallengeType'

import './styles.css'

const Challenges: React.FC = () => {
  const [challenges, setChallenges] = useState<ChallengeType[]>([])
  const [fields, setFields] = useState([])
  const [apps, setApps] = useState([])
  const [languages, setLanguages] = useState([])
  const [selectedField, setSelectedField] = useState('ui')
  const [selectedApps, setSelectedApps] = useState('')
  const [selectedLanguages, setSelectedLanguages] = useState('')

  useEffect(() => {
    async function load () {
      const response = await api.get('challenges/dev')
      setChallenges(response.data.data)
    }
    load()
  }, [selectedField])

  useEffect(() => {
    async function load () {
      const response = await api.get('fields')
      console.log(response.data.data)
      // setChallenges()
    }
    load()
  }, [])

  return (
    <>
      <Header />
      <main className="challenges-container">
        <h1 className="challenges-title">Desafios</h1>

        <section className="filters">
          <select onChange={(e) => setSelectedField(e.target.value)}>
            <option value="">Áreas de atuação</option>
            <option value="ui">Ui</option>
            <option value="frontend">Frontend</option>
          </select>
          <select onChange={(e) => setSelectedApps(e.target.value)}>
            <option value="">Linguagens</option>
          </select>
          <select onChange={(e) => setSelectedLanguages(e.target.value)}>
            <option value="">Ferramentas</option>
          </select>
        </section>

        <ul className="list-challenges">
          {challenges.map((challenge: ChallengeType) => (
            <CardCase key={challenge.id} challenge={challenge} />
          ))}
        </ul>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Challenges
