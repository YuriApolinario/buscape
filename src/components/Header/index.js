import React from 'react';
import Logo from "./assets/buscape.png";
import Men from "./assets/menu.png";

import "./styles.css";

const Header = () => (
  <div className="body">

    <header id="main-header">
      <nav>
        <img className="logo" src={Logo} />
        <button className="menu">
          <img src={Men} />
          <span class="badge">2</span>
        </button>
      </nav>
    </header>
  </div>
);


export default Header;