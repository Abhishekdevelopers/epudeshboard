import React from 'react'
import Menu from './Menu'
import Imagepath from '../Utils/Imagepath'

function Header() {
  return (
    <div className="Header">
      <div className="container-fluid">
        <div className="container">
          <div className='row'>
            <div className='col-md-2'>
              <div className='header-inner'>
                <div className="logo-container">
                  <img src={Imagepath.logo} alt="image" />
                </div>
              </div>
              </div>
              <div className='col-md-8'>
                <div className="menu-container">
                  <Menu />
                </div>
              </div>
            <div className='col-md-2'>
              <div className='singn_btn'><a href="#">Sign Up</a></div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Header