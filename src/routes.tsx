import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Challenges from './pages/challenges'
import Challenge from './pages/challenge'
import Home from './pages/home'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/challenges" component={Challenges} />
        <Route path="/challenge/:id" component={Challenge} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
