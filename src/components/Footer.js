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
                <a>Back to Top</a>
            </button>
        </div>
      );
    }
}

export default Footer