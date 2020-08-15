import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>

        {/* Sidebar Toggle (Topbar) */}
        <button id='sidebarToggleTop' className='btn btn-link d-md-none rounded-circle mr-3'>
          <i className='fa fa-bars' />
        </button>

        {/* Topbar Navbar */}
        <ul className='navbar-nav ml-auto'>

          {/* Nav Item - Messages */}
          <li className='nav-item dropdown no-arrow mx-1'>
            <Link to='/' className='nav-link dropdown-toggle'>
              <i className='fas fa-sign-out-alt fa-fw' />
            </Link>
          </li>

          <div className='topbar-divider d-none d-sm-block' />

          {/* Nav Item - User Information */}
          <li className='nav-item dropdown no-arrow'>
            <Link to='/profile' className='nav-link dropdown-toggle'>
              <span className='mr-2 d-none d-lg-inline text-gray-600 small'>Valerie Luna</span>
              <img className='img-profile rounded-circle' src='https://source.unsplash.com/QAB-WJcbgJk/60x60' alt='Profile' />
            </Link>
          </li>

        </ul>
      </nav>
    )
  }
}

export default Navbar
