import React from 'react';
import Row from './Row';
import Style from '../stylesheets/main.scss';

class Grid extends React.Component {
	render() {
		return (
			<div className="grid">
				<Row />
				<Row />
				<Row />
				<Row />
				<Row />
				<Row />
			</div>
		);
	}
}

export default Grid;
