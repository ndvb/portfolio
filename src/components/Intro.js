import React, { Component } from 'react';
import '../styles/components/Intro.scss'
import portrait from '../assets/images/portrait.jpeg'

class Intro extends Component {
    render() { 
        return (  
            <div className="intro">
                <h2 className="title">
                    <span>Full-Stack</span>
                    <span>Developer</span>
                    <span>Based in Montreal,</span>
                    <span>Canada</span>
                </h2>
                <div className="portrait">
                    <div className="picture">
                        <img src={portrait}></img>
                    </div>
                    <div className="description">
                        <p>
                            Hi, my name is Nikolas, I'm a Full-Stack developer who's interested in all sorts of web technologies, 
                            from the frontend to the backend. I'm a proud software engineer who loves designing and developing new and exciting 
                            software whether it's an application API, development tools, or adapting UI designs for web applications.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Intro;