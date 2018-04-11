import React, { Component } from 'react';
import logo from './img/layout/logo.svg';
import News from './News.js';
import Gold from './Gold.js';
import Projects from './Projects.js';
import Men from './Men.js';
import About from './About.js';
import './App.css';
import { homedir } from 'os';// require('es6-promise').polyfill();

require('isomorphic-fetch');
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: 'MIJO1dE1o6AAAAAAAAAAJETCzqS8eLLevqNH5-HA0anLzZlzzHgGSIbuhJXRMe1k' });

let linkObj
let fileName
let id

dbx.filesListFolder({path: '/Juveler foton'})
  .then(function(response) {
    return response.entries
  }).then(entries => {
  
    const links = entries.map(entry => dbx.filesGetTemporaryLink({path: entry.path_display}))
   return Promise.all(links)
  }).then(links => {
    for(let l of links) {
        console.log(l) // Skriver ut länk till varje fil
        if(l.metadata.name === 'multiring.jpg') {
          console.log("YES");
        
          linkObj = l.link
          id = l.metadata.content_hash
          console.log(linkObj)
        }
    }
  })
  .catch(function(error) {
    console.log(error);
  });




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
    component: <Projects obj={linkObj}/>
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

  render() {
    let page;
    for(let p of pages) {
      if (p.name === this.state.page) {
        page = p.component;
      }
    }
    
    
    return (
      <div className="wrapper">
        <div className="main">
          <kjd>
            {/* <div className="ex-img"> */}
              <img src={logo} style={{width: 250, height: 250}}/>
            {/* </div> */}
          </kjd>
          <navbar>
            <menu-item onClick={() => this.setState({page: 'News'})}>News</menu-item>
            <menu-item onClick={() => this.setState({page: 'Gold'})}>Gold</menu-item>
            <menu-item onClick={() => this.setState({page: 'Gold'})}>Diamonds</menu-item>
            <menu-item onClick={() => this.setState({page: 'Men'})}>For Men</menu-item>
            <menu-item onClick={() => this.setState({page: 'Projects'})}>Projects</menu-item>
            <menu-item onClick={() => this.setState({page: 'About'})}>About</menu-item>
          </navbar>
          <content>

            {/* {page} */}
            <img src={linkObj}/>

          </content>
          <footer>
            Contact
            
          </footer>
        </div>
      </div>
    );
  }
}

export default App;

