import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { store } from '../store'

const RouteWrapper = ({ component: Component, isPrivate = false, ...rest }) => {
  const { signed } = store.getState().auth

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }
  return <Route {...rest} component={Component} />
}

export default RouteWrapper
