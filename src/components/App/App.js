import React from 'react';
import {Header, ContactInfo, MainSection, SideSection, Footer} from '../../components';
import '../../styles/components/App.scss';
import data from '../../data/data';

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <Header {...data.Header}/>
        <div className="left-section">
          <ContactInfo {...data.ContactInfo}/>
        </div>
      </div>
      <div className="left-section">
        <MainSection sections={data.MainSections}/>
      </div> 
      <div className="right-section">
        <SideSection sections={data.SideSections}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
