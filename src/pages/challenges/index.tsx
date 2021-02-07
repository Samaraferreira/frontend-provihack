import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../../services/api'
import ChallengeType from '../../services/challengeType'
import CardCase from '../../components/card-case'
import Header from '../../components/header'

import './styles.css'
export interface RouteParams {
  field: string
}

const Challenges: React.FC = () => {
  const [challenges, setChallenges] = useState<ChallengeType[]>([])
  const [fields, setFields] = useState([])
  const [apps, setApps] = useState([])
  const [languages, setLanguages] = useState([])
  const [selectedField, setSelectedField] = useState('default')

  const { field } = useParams<RouteParams>()

  useEffect(() => {
    async function load () {
      const response = await api.get(`challenges/${field}`)
      setChallenges(response.data.data)
    }
    if (!selectedField) {
      load()
    }
  }, [])

  useEffect(() => {
    async function load () {
      const response = await api.get(`challenges/${selectedField}`)
      setChallenges(response.data.data)
    }
    if (selectedField !== 'default') {
      load()
    }
  }, [selectedField])

  useEffect(() => {
    async function load () {
      const response = await api.get('fields')
      setFields(response.data.data)
    }
    load()
  }, [])

  useEffect(() => {
    async function load () {
      const response = await api.get('apps')
      setApps(response.data.data)
    }
    load()
  }, [])

  useEffect(() => {
    async function load () {
      const response = await api.get('languages')
      setLanguages(response.data.data)
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
            <option value="" >Áreas de atuação</option>
            {fields.map(field => (
              <option key={field} value={field}>{field}</option>
            ))}
          </select>
          <select disabled>
            <option value="">Linguagens</option>
            {languages.map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
          <select disabled>
            <option value="">Ferramentas</option>
            {apps.map(app => (
              <option key={app} value={app}>{app}</option>
            ))}
          </select>
        </section>

        <ul className="list-challenges">
          {challenges.map((challenge: ChallengeType) => (
            <Link key={challenge.id} to={`/challenge/${challenge.id}`}>
              <CardCase challenge={challenge} />
            </Link>
          ))}
        </ul>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Challenges
