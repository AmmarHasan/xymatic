import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  constructor () {
    super()
    this.state = {
      isToggled: false
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions () {
    const windowWidth = window.innerWidth
    if (windowWidth < 768) {
      this.setState({ isToggled: false })
    };

    // Toggle the side navigation when window is resized below 480px
    if (windowWidth < 480 && !this.state.isToggled) {
      this.setState({ isToggled: true })
    };
  }

  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render () {
    return (
      <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${this.state.isToggled ? 'toggled' : ''}`} id='accordionSidebar'>

        {/* Sidebar - Brand */}
        <Link to='/' className='sidebar-brand d-flex align-items-center justify-content-center'>
          <div className='sidebar-brand-icon rotate-n-15'>
            <i className='fas fa-laugh-wink' />
          </div>
          <div className='sidebar-brand-text mx-3'>xymatics</div>
        </Link>

        <hr className='sidebar-divider my-0' />

        {/* Nav Item - Visualization */}
        <li className='nav-item active'>
          <NavLink to='/visualization' className='nav-link'>
            <i className='fas fa-fw fa-chart-area' />
            <span>Visualization</span>
          </NavLink>
        </li>

        {/* Nav Item - Profile */}
        <li className='nav-item active'>
          <NavLink to='/profile' className='nav-link'>
            <i className='fas fa-fw fa-tachometer-alt' />
            <span>Profile</span>
          </NavLink>
        </li>

      </ul>

    )
  }
}

export default Sidebar
