import React, { Component } from 'react';
import '../styles/components/Intro.scss'
import portrait from '../assets/images/portrait.jpeg'
import cv from '../assets/cv_nikolas_dvb.pdf'

class Intro extends Component {
    render() { 
        return (  
            <div className="intro">
                <h2 className="title">
                    <div>
                        <p className="slide-up">Full-Stack</p>
                    </div>
                    <div>
                        <p className="slide-up">Developer</p>
                    </div>
                    <div>
                        <p className="slide-up">Based in Montreal,</p>
                    </div>
                    <div>
                        <p className="slide-up">Canada</p>
                    </div>
                </h2>
                <div className="portrait">
                    <div className="picture">
                        <img src={portrait}></img>
                    </div>
                    <div className="description">
                        <p>
                            Hi, my name is Nikolas, I'm a Full-Stack developer who's interested in all sorts of web technologies, 
                            from frontend to backend. I'm a proud software engineer who loves designing and developing new and exciting 
                            software whether it's application APIs, development tools, or adapting UI designs for web applications.
                        </p>
                        <div className="button">
                        <a href={cv} download>Download CV</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Intro