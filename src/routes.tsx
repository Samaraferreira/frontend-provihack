import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Challenges from './pages/challenges'
import Home from './pages/home'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/challenges" component={Challenges} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
