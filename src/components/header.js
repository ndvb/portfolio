import React, { Component } from 'react';
import '../styles/components/Header.scss';

class Header extends Component {

    render() {
      return (
        <div className="header">
          <h1 className="header-col">
            <span>Nikolas De Vigne Blanchet</span>
          </h1>
          <div className="header-col center">
            <span>Portfolio</span>
          </div>
          <div className="header-col right">
            <span>Contact</span>
          </div>
        </div>
      );
    }
}

export default Header