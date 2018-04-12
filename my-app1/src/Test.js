import React, { Component } from 'react';

class Test extends Component {

	constructor(props) {
		super(props);
		this.text = React.createRef();
		this.handleClick= this.handleClick.bind(this);
		this.handleChange= this.handleChange.bind(this);
		this.state= {
			arr: [],
			text: ''
		};
	}

	handleClick() {
		let temp=[];
		let val= this.text.current.value;
		if(val!= '') {
			let arrayele= this.state.arr;
			temp= arrayele.map((ele)=>ele);
			temp.push(val);
			this.setState({arr: temp, text: ''});
		}	
	}

	handleChange(e) {
		this.setState({text: e.target.value});
	}
  render() {
  	let tempArr= this.state.arr;
    return (
      <div>
        <h2>{this.props.name}</h2>
	      <input type="text" ref= {this.text} value= {this.state.text} onChange= {this.handleChange}/>
	      <button onClick={this.handleClick}>{this.props.add} # {tempArr.length}</button>
        <h3>{this.props.list}</h3>
        <ul>
        	{ tempArr.map((val)=><li>{val}</li>) }
        </ul> 
      </div> 
    );
  }
}

export default Test;
