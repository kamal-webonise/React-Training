import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import List from './List.js';
import Info from './Info.js';

class App extends Component {
  render() {
    return (
      <Router>
      	<switch>
			    <Route exact path='/' component={List} />
			    <Route path='/info' component={Info} />
			  </switch>  
      </Router>  
    );
  }
}

export default App;
