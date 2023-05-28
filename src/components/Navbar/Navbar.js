import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (
        <div>
     <meta name='viewport' content='width=device-width, initial-scale=1' />
  <section class="top-nav">
    <div>
      <li className="lol">32-maktab</li>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><p>Our products</p></li>
      <li><p>About Use</p></li>
      <li><p>Contacts</p></li>
      <li><p>Login</p></li>
     
    </ul>
  </section>

    </div>
    )
}

export default Navbar