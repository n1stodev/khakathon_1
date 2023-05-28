import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"

function Navbar() {
    return (
        <div>
            {/* navbar was created by the hijab princess */}
            <div className="container">

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
      <li><b>Login</b></li>
     
    </ul>
  </section>
            </div>

    </div>
    )
}

export default Navbar