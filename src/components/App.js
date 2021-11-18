import React from 'react';
import {Header, Intro, Projects} from '.';
import '../styles/components/App.scss';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="page">
        <div className="content">
          <Intro/>
          <hr></hr>
          <Projects/>
          <Footer/>
        </div>
      </main>
    </div>
  );
}

export default App
