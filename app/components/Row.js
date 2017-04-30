import React from 'react';
import Hole from './Hole';
import Style from '../stylesheets/main.scss';

class Row extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="hole-back">
					<Hole />
				</div>
				<div className="hole-back">
					<Hole />
				</div>
				<div className="hole-back">
					<Hole />
				</div>
				<div className="hole-back">
					<Hole />
				</div>
				<div className="hole-back">
					<Hole />
				</div>
				<div className="hole-back">
					<Hole />
				</div>
				<div className="hole-back">
					<Hole />
				</div>
			</div>
		);
	}
}

export default Row;
