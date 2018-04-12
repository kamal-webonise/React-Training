import React, { Component } from 'react';
import './App.css';
import Test from './Test'
import PropTypes from 'prop-types'

class App extends Component {
  render() {
  	let obj= { name: "Enter your Name", add: 'Add', list: 'List' };
    return (
      <div>
        <Test {...obj}/>
      </div>  
    );
  }
}

App.propTypes = {
	index: PropTypes.number
};
export default App;
