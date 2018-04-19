import React ,{ Component } from 'react';

class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: this.props.arr
		};
	}
	static getDerivedStateFromProps(newProps, prevState) {
		return({
			arr: newProps.arr
		})
	}
	render() {
		let tempArr= [...this.state.arr];
		tempArr.sort();
		return(
			<ul>
			{ tempArr.map((val)=><li>{val}</li>) }		
			</ul>	
		);
	}
}

export default Display ;
