import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Links from './display';
import Footer from './footer'

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Links />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
