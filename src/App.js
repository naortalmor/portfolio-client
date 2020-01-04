import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import OwnerData from './components/owner-data/owner-data.component';
import WorksContainer from './components/works-container/works-container.component';
import Firebase from './services/firebase/firebase'
import * as firebase from 'firebase';

export default class App extends React.Component {
  maximuxWorksOnScroll = 3;

  constructor() {
    super();
    new Firebase();

    this.state = {
      worksMap: [],
      pagesCount: 0
    }
  }
  
  getAllWorks() {
    firebase.database().ref('/works').on('value', data => {
      let dbDataValue = Object.values(data.val());
      let works = []
      for (let index = 0; index < dbDataValue.length ; index+=this.maximuxWorksOnScroll) {
        works.push(dbDataValue.slice(index, index+this.maximuxWorksOnScroll));
    }
      this.setState({
        pagesCount: Math.round(dbDataValue.length / this.maximuxWorksOnScroll),
        worksMap: works
      });
    })
  }

  componentDidMount() {
    this.getAllWorks();

  }

  render() {
    return (
        <div className="App">
          <Header />
          <OwnerData />
          <WorksContainer 
            worksMap={this.state.worksMap} 
            pagesCount={this.state.pagesCount} />
        </div>
    );
  }
}
