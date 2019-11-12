import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import OwnerData from './components/owner-data/owner-data.component';
import WorksContainer from './components/works-container/works-container.component';
import {allWorksMock} from './mocks/works.mock'

function App() {
  let maximuxWorksOnScroll = 3;

  return (
    <div className="App">
      <Header />
      <OwnerData />
      <WorksContainer allWorks={allWorksMock} maxWorks={maximuxWorksOnScroll} />
    </div>
  );
}

export default App;
