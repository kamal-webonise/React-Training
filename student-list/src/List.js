import React, { Component } from 'react';

class List extends Component {

	constructor(props) {
		super(props);
		this.text = React.createRef();
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			val: '' ,
			data: {
			  results: [
			    {"firstName": "Sanket", "lastName":"Gadade","marks":{"english":70, "hindi":60,"mathematics":46}},
			    {"firstName": "Shubham", "lastName":"Laad","marks":{"english":40, "hindi":55,"mathematics":46}},
			    {"firstName": "Swapnil", "lastName":"Patil","marks":{"english":50, "hindi":60,"mathematics":77}},
			    {"firstName": "Ankita", "lastName":"Pawar","marks":{"english":50, "hindi":55,"mathematics":46}},
			    {"firstName": "Vijayraj", "lastName":"Nathe","marks":{"english":35, "hindi":45,"mathematics":11}}
			  ]
			}
		}
	}

	handleChange(e) {
		this.setState({val : e.target.value});
	}

	handleClick(e) {
		return null;
	}

	render() {
		let rows = [];
		let result = this.state.data.results;

		for( let i = 0; i < result.length; i++) {
			let rowId = `row${i}`
			let cell = []
			for ( var j = 0; j < 2;j++) {
				var cellId = `cell{i}-${j}`
				cell.push(<td key={cellId} id={cellId}>{result[i].firstName}</td>)
			}
			rows.push(<tr key={i} id={rowId}>{cell}</tr>)
		}

			

		return(
			<div>
				<input type="text" placeHolder = "Search Box" ref= {this.text} value={this.state.val} onChange={this.handleChange} />
				<button onClick = {this.handleClick}> Search </button>

				<ul>
					<li>
						<input type = "checkbox" /> 
						<span>Distinction </span>
					</li>
					<li>	
						<input type = "checkbox"/>
						<span> First Class </span>
					</li>
					<li>	
						<input type = "checkbox"/>
						<span> Second Class </span>
					</li>
					<li>	
						<input type = "checkbox"/>
						<span> Fail </span>
					</li>
				</ul>

				<table id='simple-board'>
					<thread>
						<tr>
							<th>FirstName</th>
							<th>LastName</th>
							<th>Percentage</th>
						</tr>
					</thread>
					<tbody>
						{rows}
					</tbody>
				</table>

			</div>
		);
	}
}

export default List;

	
  