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
  return (
    <div className='container-fluid'>

      {/* Page Heading */}
      <div className='d-sm-flex align-items-center justify-content-between mb-4'>
        <h1 className='h3 mb-0 text-gray-800'>Visualization</h1>
      </div>

      {/* Content Row */}

      <div className='row'>
        {/* Realtime Chart */}
        <div className='col-xl-12 col-lg-12'>
          <div className='card shadow mb-4'>
            {/* Card Header - Dropdown */}
            <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
              <h6 className='m-0 font-weight-bold text-primary'>Realtime Chart</h6>
            </div>
            {/* Card Body */}
            <div className='card-body'>
              <div className='chart-area'>
                <canvas id='myRealtimeChart' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color System */}
      <div className='row'>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-primary text-white shadow'>
            <div className='card-body'>
                Event 1
            </div>
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-success text-white shadow'>
            <div className='card-body'>
                Event 2
            </div>
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          <div className='card bg-info text-white shadow'>
            <div className='card-body'>
                Event 3
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Main
