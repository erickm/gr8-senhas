import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/dashboard'
import CodePanel from '../pages/CodePanel'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/Panel" component={CodePanel} isPrivate />
    </Switch>
  )
}
export default Routes
