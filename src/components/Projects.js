import React, { Component } from 'react';
import '../styles/components/Projects.scss';
import meteorLogo from '../assets/images/meteor-logo.svg';
import mongodbLogo from '../assets/images/mongodb.svg';
import reactjsLogo from '../assets/images/reactjs-icon.svg';
import sassLogo from '../assets/images/sass.svg';
import phonegapLogo from '../assets/images/phonegap.svg';
import angularLogo from '../assets/images/angular.svg';
import nodeLogo from '../assets/images/node.svg';
import expressLogo from '../assets/images/expressjs.svg';
import mysqlLogo from '../assets/images/mysql.svg';
import spotifyLogo from '../assets/images/Spotify.svg';
import herokuLogo from '../assets/images/heroku.svg';
import htmlLogo from '../assets/images/html.svg';
import cssLogo from '../assets/images/css.svg';
import jsLogo from '../assets/images/jslogo.svg';
import p5jsLogo from '../assets/images/p5js.svg';


class Projects extends Component {

    render() {
      return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3>United Airlines Microsite</h3>
                <div className="info">
                    <p className="description">
                        A CMS driven website that displays upcoming entertainment in passenger flights. 
                        The project was built using Meteor as an SPA controller, React.js and Sass for the UI, 
                        and Mongodb as the data model. Tasks involved implementing designs, setting up a database 
                        driven by a CMS, and ensuring that accessibility was in accordance with W3C accessibility 
                        guidelines.
                    </p>
                    <div className="stack">
                        <h4>Technology Stack</h4>
                        <div className="svgs">
                            <img src={meteorLogo}/>
                            <img src={reactjsLogo}/>
                            <img src={sassLogo}/>
                            <img src={mongodbLogo}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <h3>ListenIn</h3>
                <div className="info">
                    <p className="description">
                    A personal project application that allows users to see what other users are listening to around them.
                    Implemented using Phonegap to target multiple mobile platforms at once, Angular.js 
                    for the frontend application, Node.js for the build, development tools and backend server, 
                    Express.js to create a scalable API to communicate with the project's MySQL database and the 
                    Spotify API. 
                    </p>
                    <div className="stack">
                        <h4>Technology Stack</h4>
                        <div className="svgs">
                            <img src={phonegapLogo}/>
                            <img src={angularLogo}/>
                            <img src={nodeLogo}/>
                            <img src={expressLogo}/>
                            <img src={mysqlLogo}/>
                            <img src={spotifyLogo}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <h3>Artist Album Page</h3>
                <div className="info">
                    <p className="description">
                        Simple web page with custom audio player and 3d rotatable album hosted on a free heroku 
                        instance with custom domain made for an album I composed and produced in 2019. Created 
                        using HTML, CSS, JS and p5.js for the 3d album.
                    </p>
                    <div className="stack">
                        <h4>Technology Stack</h4>
                        <div className="svgs">
                            <img src={herokuLogo}/>
                            <img src={htmlLogo}/>
                            <img src={cssLogo}/>
                            <img src={jsLogo}/>
                            <img src={p5jsLogo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Projects