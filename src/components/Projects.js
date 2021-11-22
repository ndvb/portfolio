import React, { Component } from 'react';
import '../styles/components/Projects.scss';
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
import cypressLogo from '../assets/images/cypress.svg';
import rxjsLogo from '../assets/images/rxjs.svg';
import jenkinsLogo from '../assets/images/jenkins.svg';
import gulpLogo from '../assets/images/gulp.svg';
import falconLogo from '../assets/images/falcon.svg';
import pythonLogo from '../assets/images/python.svg';
import dockerLogo from '../assets/images/docker.svg';
import ansibleLogo from '../assets/images/ansible.svg';
import archlinuxLogo from '../assets/images/arch-linux.svg';
import karmaLogo from '../assets/images/karma.svg';
import jasmineLogo from '../assets/images/jasmine.svg';
import lessLogo from '../assets/images/less.svg';


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
                        servers on the plane. Notably, I worked on adding the games functionality to the frontend application, and I also worked on the 
                        backend software design and implementation of the in-flight shopping and Apple Pay features.
                    </p>
                    <div className="button">
                        <a href="https://www.anuvu.com/our-portfolio/products#showcase-intro-airtime-portal" target="_blank">Find Out More</a>
                    </div>
                    <div className="stack">
                        <div className="svgs">
                            <a href="https://angularjs.org/" target="_blank">
                                <img src={angularLogo}/>
                            </a>
                            <a href="https://rxjs.dev/guide/overview" target="_blank">
                                <img src={rxjsLogo}/>
                            </a>
                            <a href="https://sass-lang.com/" target="_blank">
                                <img src={sassLogo}/>
                            </a>
                            <a href="https://www.cypress.io/" target="_blank">
                                <img src={cypressLogo}/>
                            </a>
                            <a href="https://gulpjs.com/" target="_blank">
                                <img src={gulpLogo}/>
                            </a>
                            <a href="https://www.jenkins.io/" target="_blank">
                                <img src={jenkinsLogo}/>
                            </a>
                            <a href="https://falcon.readthedocs.io/en/stable/" target="_blank">
                                <img src={falconLogo}/>
                            </a>
                            <a href="https://www.python.org/" target="_blank">
                                <img src={pythonLogo}/>
                            </a>
                            <a href="https://www.docker.com/" target="_blank">
                                <img src={dockerLogo}/>
                            </a>
                            <a href="https://www.ansible.com/" target="_blank">
                                <img src={ansibleLogo}/>
                            </a>
                            <a href="https://archlinux.org/" target="_blank">
                                <img src={archlinuxLogo}/>
                            </a>
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
                            <a href="https://angularjs.org/" target="_blank">
                                <img src={angularLogo}/>
                            </a>
                            <a href="https://rxjs.dev/guide/overview" target="_blank">
                                <img src={rxjsLogo}/>
                            </a>
                            <a href="https://lesscss.org/" target="_blank">
                                <img src={lessLogo}/>
                            </a>
                            <a href="https://gulpjs.com/" target="_blank">
                                <img src={gulpLogo}/>
                            </a>
                            <a href="https://www.cypress.io/" target="_blank">
                                <img src={cypressLogo}/>
                            </a>
                            <a href="https://jasmine.github.io/" target="_blank">
                                <img src={jasmineLogo}/>
                            </a>
                            <a href="https://karma-runner.github.io/latest/index.html" target="_blank">
                                <img src={karmaLogo}/>
                            </a>
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
                            <a href="https://github.com/phonegap" target="_blank">
                                <img src={phonegapLogo}/>
                            </a>
                            <a href="https://angularjs.org/" target="_blank">
                                <img src={angularLogo}/>
                            </a>
                            <a href="https://nodejs.org/en/" target="_blank">
                                <img src={nodeLogo}/>
                            </a>
                            <a href="https://expressjs.com/" target="_blank">
                                <img src={expressLogo}/>
                            </a>
                            <a href="https://www.mysql.com/" target="_blank">
                                <img src={mysqlLogo}/>
                            </a>
                            <a href="https://developer.spotify.com/" target="_blank">
                                <img src={spotifyLogo}/>
                            </a>
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
                            <a href="https://www.heroku.com/" target="_blank">
                                <img src={herokuLogo}/>
                            </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                                <img src={htmlLogo}/>
                            </a>
                            <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                                <img src={cssLogo}/>
                            </a>
                            <a href="https://www.javascript.com/" target="_blank">
                                <img src={jsLogo}/>
                            </a>
                            <a href="https://p5js.org/" target="_blank">
                                <img src={p5jsLogo}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Projects