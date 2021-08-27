import React from 'react';
import {Header, Intro, Projects} from '.';
import '../styles/components/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="page">
        <div className="content">
          <Intro/>
          <hr></hr>
          <Projects/>
        </div>
      </main>
    </div>
  );
}

export default App
