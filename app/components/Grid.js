import React from 'react';
import Row from './Row';
import Style from '../stylesheets/main.scss';

class Grid extends React.Component {
	renderRow(i) {
		return <Row holes={this.props.holes} value={i} />;
	}

	render() {
		return (
			<div>
				{this.renderRow(6)}
				{this.renderRow(13)}
				{this.renderRow(20)}
				{this.renderRow(27)}
				{this.renderRow(34)}
				{this.renderRow(41)}
			</div>
		);
	}
}

export default Grid;
