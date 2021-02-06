import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/register" exact component={Register} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
