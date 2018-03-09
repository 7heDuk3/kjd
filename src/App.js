import React, { Component } from 'react';
import logo from './logo.svg';
import News from './News.js';
import Gold from './Gold.js';
import Projects from './Projects.js';
import Men from './Men.js';
import About from './About.js';
import './App.css';
import { homedir } from 'os';


const pages = [
  {
    name: 'News',
    component: <News/>
  },
  {
    name: 'Gold',
    component: <Gold/>
  },
  {
    name: 'Projects',
    component: <Projects/>
  },
  {
    name: 'Men',
    component: <Men/>
  },
  {
    name: 'About',
    component: <About/>
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {page: 'News'}
  }
  
  // switchPage(toPage) {
  //   this.state = toPage;
  // }
  
  render() {
    let page;
    for(let p of pages) {
      if (p.name === this.state.page) {
        page = p.component;
      }
    }


    // switch(this.state.page) {
    //   case 1:
    //   page
    // }

    return (
      <div className="wrapper">
        <div className="main">
          <kjd></kjd>
          <navbar>
            <menu-item onClick={() => this.setState({page: 'News'})}>News</menu-item>
            <menu-item onClick={() => this.setState({page: 'Gold'})}>Gold</menu-item>
            <menu-item onClick={() => this.setState({page: 'Gold'})}>Diamonds</menu-item>
            <menu-item onClick={() => this.setState({page: 'Men'})}>For Men</menu-item>
            <menu-item onClick={() => this.setState({page: 'Projects'})}>Projects</menu-item>
            <menu-item onClick={() => this.setState({page: 'About'})}>About</menu-item>
          </navbar>
          <content>
        
            {page}
            
          </content>
        </div>
      </div>
    );
  }
}

export default App;

