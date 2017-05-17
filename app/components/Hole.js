import React from 'react';
import Style from '../stylesheets/main.scss';

class Hole extends React.Component {
	render() {
		var holeStyle = "hole";
		const color = this.props.holes[this.props.value];

		if (color === 'R') {
			holeStyle += " hole-red";
		}

		if (color === 'Y') {
			holeStyle += " hole-yellow";
		}

		return (
			<div className={holeStyle}></div>
		);
	}
}

export default Hole;
