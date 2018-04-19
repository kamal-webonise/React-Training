import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class Protected extends Component {
	render() {
		return (
			<h4>this is Protected</h4>
		);
	}
}

export default Protected;
