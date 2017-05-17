import React from 'react';
import Chip from './Chip';
import Style from '../stylesheets/main.scss';

class Drop extends React.Component {
	renderChip(i) {
		return <Chip onClick={() => this.props.onClick(i)} red={this.props.color} />;
	}

	render() {
		return (
			<div className="drop">
				{this.renderChip(0)}
				{this.renderChip(1)}
				{this.renderChip(2)}
				{this.renderChip(3)}
				{this.renderChip(4)}
				{this.renderChip(5)}
				{this.renderChip(6)}
			</div>
		);
	}
}

export default Drop;
