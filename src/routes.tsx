import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Challenges } from './pages'

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
