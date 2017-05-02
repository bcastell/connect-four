import React from 'react';
import Grid from './Grid';
import Drop from './Drop';
import Style from '../stylesheets/main.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			red : true
		};
	}

	handleClick() {
		this.setState({
			red : !this.state.red
		});
	}

	render() {
		return (
			<div>
				<Drop onClick={() => this.handleClick()}
					  color={this.state.red} />
				<Grid />
			</div>
		);
	}
}

export default App;
