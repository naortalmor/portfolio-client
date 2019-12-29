import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import OwnerData from './components/owner-data/owner-data.component';
import WorksContainer from './components/works-container/works-container.component';
import {allWorksMock} from './mocks/works.mock'
import Firebase, { FirebaseContext } from './services/firebase/index'

function App() {
  let maximuxWorksOnScroll = 3;

  return (
    <FirebaseContext.Provider value={new Firebase()}>
        <div className="App">
        <Header />
        <OwnerData />
        <WorksContainer allWorks={allWorksMock} maxWorks={maximuxWorksOnScroll} />
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
