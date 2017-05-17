import React from 'react';
import Hole from './Hole';
import Style from '../stylesheets/main.scss';

class Row extends React.Component {
	renderHole(i) {
		return (
			<div className="hole-back">
				<Hole holes={this.props.holes} value={i} />
			</div>
		);
	}

	render() {
		return (
			<div className="row">
				{this.renderHole(this.props.value - 6)}
				{this.renderHole(this.props.value - 5)}
				{this.renderHole(this.props.value - 4)}
				{this.renderHole(this.props.value - 3)}
				{this.renderHole(this.props.value - 2)}
				{this.renderHole(this.props.value - 1)}
				{this.renderHole(this.props.value)}
			</div>
		);
	}
}

export default Row;
