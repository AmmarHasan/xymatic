import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Main'
import Sidebar from './Sidebar'
class Dashboard extends Component {
  render () {
    return (
      <div>
        <Router>
          <Sidebar />
          <Route path='/' component={Main} />
        </Router>
      </div>
    )
  }
}

export default Dashboard
