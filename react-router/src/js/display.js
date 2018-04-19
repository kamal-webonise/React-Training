import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Public from './public';
import Protected from './protect';
import Home from './home';
import Header from './header';
import Footer from './footer';

class Links extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to= "/">Home Page</Link>
            </li>
            <li>
              <Link to= "/public">Public Page</Link>
            </li>
            <li>
              <Link to= "/protected">Protected Page</Link>
            </li>
          </ul>
          <switch>
            <Route exact path= "/" component= {Home}/>
            <Route path= "/public" component= {Public} />
            <Route path= "/protected" component= {Protected} />
          </switch>  
        </div> 
      </Router>  
    );
  }
}


export default Links;
