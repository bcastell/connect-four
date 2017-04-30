import React from 'react';
import Chip from './Chip';
import Style from '../stylesheets/main.scss';

class Drop extends React.Component {
	render() {
		return (
			<div className="drop">
				<Chip />
				<Chip />
				<Chip />
				<Chip />
				<Chip />
				<Chip />
				<Chip />
			</div>
		);
	}
}

export default Drop;
