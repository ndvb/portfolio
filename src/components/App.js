import React from 'react';
import {Header, Intro} from '.';
import '../styles/components/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="page">
        <div className="content">
          <Intro/>
        </div>
      </main>
    </div>
  );
}

export default App;
