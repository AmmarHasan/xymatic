import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  render () {
    return (
      <div>
        <div>
          <div>
            <Link to='/'>
              Simple Dashboard
            </Link>
          </div>
          <ul>
            <li>
              <NavLink to='/visualization'>
                <i />
                <p>Visualization</p>
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile'>
                <i />
                <p>User Profile</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar
