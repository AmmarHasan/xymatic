import React, { Component } from 'react'
import Navbar from './Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
  render () {
    return (
      <div style={{ width: '100%' }}>
        <Navbar />
        <Switch>
          <Route path='/visualization' component={Visualization} />
          <Route path='/profile' component={UserProfile} />
          <Redirect from='*' to='/profile' />
        </Switch>
      </div>
    )
  }
}

function UserProfile () {
  return 'profile'
}

function Visualization () {
  return 'Visualization'
}
export default Main
