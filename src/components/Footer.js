import React, { Component } from 'react';
import '../styles/components/Footer.scss';

class Footer extends Component {

    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
    };

    render() {
      return (
        <div className="footer">
            <hr/>
            <button onClick={this.scrollToTop}>
                Back to Top
            </button>
        </div>
      );
    }
}

export default Footer