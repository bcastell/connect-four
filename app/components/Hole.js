import React from 'react';
import Style from '../stylesheets/main.scss';

class Hole extends React.Component {
	getStyle() {
		var style = "hole";
		const color = this.props.holes[this.props.value];

		if (color === "R")
			style += " hole-red";

		if (color === "Y")
			style += " hole-yellow";

		return style;
	}

	render() {
		return (
			<div className={this.getStyle()}></div>
		);
	}
}

export default Hole;
