import React, { Component } from 'react';
import InputBox from './InputBox.js';
import CheckBox from './CheckBox.js';
import Display from './Display.js';

class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {
			  results: [
			    {"firstName": "sanket", "lastName":"Gadade","marks":{"english":70, "hindi":60,"mathematics":46}},
			    {"firstName": "shubham", "lastName":"Laad","marks":{"english":40, "hindi":55,"mathematics":46}},
			    {"firstName": "swapnil", "lastName":"Patil","marks":{"english":50, "hindi":60,"mathematics":77}},
			    {"firstName": "ankita", "lastName":"Pawar","marks":{"english":50, "hindi":55,"mathematics":46}},
			    {"firstName": "vijayraj", "lastName":"Nathe","marks":{"english":35, "hindi":45,"mathematics":11}},
			    {"firstName": "sanket", "lastName":"Gadade","marks":{"english":70, "hindi":60,"mathematics":46}}
			  ]
			}
		}
		this.changeArray = this.changeArray.bind(this);
		this.changeCheck = this.changeCheck.bind(this);
	}

	changeArray(name) {
		let flag = 0;
		let temp = [...this.state.data.results];
		let tempObj = []; 
		

		temp.map((obj) => {
			if(obj.firstName === name || obj.lastName === name) {
				flag=1;
				tempObj.push(obj);
			}
		});

		if (flag == 1) {
			let newData = { results: tempObj };
			this.setState({
				data: newData
			})
		}	
	} 

	changeCheck(e) {
		// let id = e.target.id;
		// let status = e.target.checked;
		// debugger;
		let tempData = [...this.state.data.results];
		let status = [];
		let grade = [65,60,55,33];

		for(let i = 0; i < 4; i++) {
			let ele = document.getElementById(i+1);
			status[i] = ele.checked;
		}
		
		for(let i = 3; i >= 0 ; i-- ) {
			if(!status[i]) {
				tempData.map((obj)=> {
					if(obj.percentage < grade[i]){
						tempData.pop(obj);
					}
				});
			}
			console.log(i);
			tempData.map((obj) => {
				console.log(obj);
			});
		}
	}	

	render() {
		return(
			<div>
				<InputBox changeArray = { this.changeArray } />
				<CheckBox changeCheck = { this.changeCheck}/>
				<Display data= {this.state.data} />
			</div>
		);
	}
}

export default List;

	
  