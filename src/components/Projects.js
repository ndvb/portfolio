import React, { Component } from 'react';
import '../styles/components/Projects.scss';
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
                <h3>Airtime Portal</h3>
                <div className="info">
                    <p className="description">
                        Contributed to both the frontend and backend development of this generic and themeable application that offers content such as
                        movies, tv series, audio, games, wifi connectivity, and flight information to passengers in-flight. The frontend project uses 
                        AngularJs as the main framework, RxJS to fetch data from our backend API, Sass for styling and theming, Cypress for testing
                        , and Gulp and Jenkins for build and testing automation. For the backend, there are two Falcon python APIs, the on-ground API, 
                        which is hosted on Ubuntu servers and deployed using Docker and Ansible, and there is the in-flight API, which lives on Archlinux 
                        servers on the plane and is installed via pacman packages. Notably, I worked on adding the games functionality to the frontend 
                        application, and I also worked on the backend software design and implementation of the in-flight shopping and Apple Pay features.
                    </p>
                    <div className="button">
                        <a href="https://www.anuvu.com/our-portfolio/products#showcase-intro-airtime-portal" target="_blank">Find Out More</a>
                    </div>
                    <div className="stack">
                        <div className="svgs">
                            <img src={angularLogo}/>
                            <img src={reactjsLogo}/>
                            <img src={sassLogo}/>
                            <img src={mongodbLogo}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <h3>Microportal</h3>
                <div className="info">
                    <p className="description">
                        Contributed to the development of this generic and themeable template for CMS driven websites that display upcoming entertainment 
                        in passenger flights. The project was built using AngularJs to create an SPA, RxJS to fetch data from the CMS, Less for styling 
                        and theming, Gulp to automate the build and theming process, and Cypress, Jasmine and Karma for testing. Tasks involved implementing 
                        designs, and ensuring that accessibility was in accordance with W3C accessibility guidelines.
                    </p>
                    <div className="button">
                        <a href="https://entertainment.cathaypacific.com/" target="_blank">Visit the Website</a>
                    </div>
                    <div className="stack">
                        <div className="svgs">
                            <img src={angularLogo}/>
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
                <h3>Album Page</h3>
                <div className="info">
                    <p className="description">
                        Simple web page with custom audio player and 3d rotatable album hosted on a free heroku 
                        instance with custom domain made for an album I composed and produced in 2019. Created 
                        using HTML, CSS, JS and p5.js for the 3d album. (The link may take time to load since 
                        the heroku server may be asleep).
                    </p>
                    <div className="button">
                        <a href="http://sequester.xyz/index.html" target="_blank">Visit the Website</a>
                    </div>
                    <div className="stack">
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