import React, { Component } from 'react';

class SearchBar extends Component { //component provides a bunch of functionality to class
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	render() { // always must define a render method
		return (
			<div>
		 		<input
		 			value={this.state.term} // this
		 			onChange={event => this.setState({term: event.target.value})} /> 
		 		Value of input: {this.state.term}
	 		</div>
		);
	}

	onInputChange(event) { //event handler. 'event' is what is rendered from input above
		console.log(event.target.value);
	}
}

export default SearchBar;