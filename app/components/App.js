import React from 'react';
import Grid from './Grid';
import Drop from './Drop';
import Style from '../stylesheets/main.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);

		const rows = 6;
		const columns = 7;

		this.state = {
			red : true,
			grid : Array(rows * columns).fill(null)
		};
	}

	handleClick(i) {
		const holes = this.state.grid.slice();
		for (let j = 41 - Math.abs(i - 6); j >= 0; j -= 7) {
			if (!holes[j]) {
				holes[j] = this.state.red ? 'R' : 'Y';
				break;
			}
		}

		this.setState({
			red : !this.state.red,
			grid : holes
		});
	}

	render() {
		return (
			<div>
				<Drop onClick={(i) => this.handleClick(i)}
					  color={this.state.red} />
				<Grid holes={this.state.grid} />
			</div>
		);
	}
}

export default App;
