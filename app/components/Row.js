import React from 'react';
import Hole from './Hole';

class Row extends React.Component {
	render() {
		return (
			<div>
				<Hole />
				<Hole />
				<Hole />
				<Hole />
				<Hole />
				<Hole />
				<Hole />
			</div>
		);
	}
}

export default Row;
