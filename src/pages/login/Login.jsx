import React from 'react'
import Header from '../../components/Header'
import Imagepath from '../../Utils/Imagepath'
import "./Login.css"

function Login() {
  return (
    <div className='Login_pg'>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
          <img src={Imagepath.logo_light} alt="image" />
            <img src={Imagepath.Group513785} alt="image" />
            <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit, </p>
          </div>
          <div className="col-md-8 secnd_secc"><h2>Login</h2></div>
        </div>
      </div>
    </div>
  )
}

export default Login