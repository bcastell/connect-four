import React from 'react';
import Grid from './Grid';
import Drop from './Drop';
import Restart from './Restart';
import Style from '../stylesheets/main.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleRestart = this.handleRestart.bind(this);

		this.state = {
			red : true,
			grid : Array(42).fill(null),
			winner : false
		};
	}

	checkWin(holes, color) {
		var i, j;

		// Horizontal Check
		for (j = 0; j <= 35; j += 7) {
			for (i = j; i < j + 4; ++i) {
				if (holes[i] === color && holes[i + 1] === color &&
					holes[i + 2] === color && holes[i + 3] === color) {
					return true;
				}
			}
		}

		// Vertical Check
		for (j = 0; j <= 6; ++j) {
			for (i = j; i <= j + 14; i += 7) {
				if (holes[i] === color && holes[i + 7] === color &&
					holes[i + 14] === color && holes[i + 21] === color) {
					return true;
				}
			}
		}

		// Ascending Diagonal Check
		for (j = 21; j <= 35; j += 7) {
			for (i = j; i < j + 4; ++i) {
				if (holes[i] === color && holes[i - 6] === color &&
					holes[i - 12] === color && holes[i - 18] === color) {
					return true;
				}
			}
		}

		// Descending Diagonal Check
		for (j = 24; j <= 38; j += 7) {
			for (i = j; i < j + 4; ++i) {
				if (holes[i] === color && holes[i - 8] === color &&
					holes[i - 16] === color && holes[i - 24] === color) {
					return true;
				}
			}
		}

		return false;
	}

	handleClick(i) {
		if (!this.state.winner) {
			const holes = this.state.grid.slice();
			const color = this.state.red ? "R" : "Y";

			let filled = false;
			for (let j = 41 - Math.abs(i - 6); j >= 0; j -= 7) {
				if (!holes[j]) {
					holes[j] = color;
					filled = true;
					break;
				}
			}

			const flip = filled ? !this.state.red : this.state.red;
			const won = this.checkWin(holes, color);

			this.setState({
				red : flip,
				grid : holes,
				winner : won
			});
		}
	}

	handleRestart() {
		this.setState({
			red : true,
			grid : Array(42).fill(null),
			winner : false
		});
	}

	render() {
		return (
			<div>
				<Drop onClick={i => this.handleClick(i)}
					  color={this.state.red} />
				<Grid holes={this.state.grid} />
				<Restart onClick={() => this.handleRestart()}
						 color={this.state.red}
						 won={this.state.winner} />
			</div>
		);
	}
}

export default App;
