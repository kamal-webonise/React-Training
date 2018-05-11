import React, { Component } from 'react';

class Display extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		}
	}

	static getDerivedStateFromProps(newProps, prevState) {
		if(newProps != prevState) {
			return({
				data: newProps.data
			})
		}
	}
	

	render() {

		let newArr = [];
		let rows = [];
		let result = this.state.data.results;

		result.map( (val) => 
		{ 
			newArr[newArr.length]=0; 
			for( let i in val.marks) { 
				newArr[newArr.length - 1] += val.marks[i]; 
			} 
		})
		let count = 0;

		result.map( (val) =>
		{
			val.percentage = Math.floor(newArr[count]/3);
			count++;
		}) 

		

		for( let i = 0; i < result.length; i++) {
			let rowId = `row${i}`
			let cell = []
			var columnName = ["firstName","lastName","percentage"]

			for ( var j = 0; j < 3;j++) {
				var cellId = `cell{i}-${j}`
				cell.push(<td key={cellId} id={cellId}>{result[i][columnName[j]]}</td>)
			}
			rows.push(<tr key={i} id={rowId}>{cell}</tr>)
		}

		


		return(
			<div>
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

export default Display;

	
  