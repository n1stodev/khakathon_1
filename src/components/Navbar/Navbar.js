import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { openLogin } from '../../context/action/action'
import { useDispatch } from 'react-redux'

function Navbar() {
  let dispatch = useDispatch()
  return (
    <div>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <section class="top-nav">
        <div>
          <li className="lol"><img src={logo} alt="" /></li>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <ul class="menu">
          <li><b>Our products</b></li>
          <li><b>About Use</b></li>
          <li><b>Contacts</b></li>
          <li onClick={() => dispatch(openLogin())}><b>Login</b></li>
        </ul>
      </section>

    </div>
  )
}

export default Navbar